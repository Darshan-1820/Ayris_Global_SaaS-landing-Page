import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Simple in-memory rate limiting (resets on server restart)
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute per IP

function isRateLimited(ip) {
  const now = Date.now();
  const windowData = rateLimit.get(ip);

  if (!windowData) {
    rateLimit.set(ip, { count: 1, startTime: now });
    return false;
  }

  if (now - windowData.startTime > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, startTime: now });
    return false;
  }

  if (windowData.count >= MAX_REQUESTS) {
    return true;
  }

  windowData.count++;
  return false;
}

// Sanitize input to prevent XSS
function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '') // Remove angle brackets
    .trim()
    .slice(0, 5000); // Limit length
}

export async function POST(request) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly at contact@ayrisglobal.com' },
        { status: 503 }
      );
    }

    // Get client IP for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Sanitize inputs
    const name = sanitizeInput(body.name);
    const email = sanitizeInput(body.email);
    const message = sanitizeInput(body.message);

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate input lengths
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 5000 characters' },
        { status: 400 }
      );
    }

    // Validate email format with stricter regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Ayris Global <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'contact@ayrisglobal.com'],
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new inquiry from the Ayris Global website.

Name: ${name}
Email: ${email}
Message:
${message}

---------------------------------------
Submitted via Ayris Global Contact Form`,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
