'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocus = (field) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocused((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: error.message,
      });
    }
  };

  const isActive = (field) => focused[field] || formData[field];

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
      {/* Form Header */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Send us a message</h3>
        <p className="text-gray-500 text-sm">We&apos;d love to hear from you</p>
      </div>

      {/* Name Field */}
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => handleFocus('name')}
          onBlur={() => handleBlur('name')}
          required
          placeholder=" "
          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 text-[15px] transition-all duration-300 focus:outline-none focus:border-[#0A7CFF] focus:ring-4 focus:ring-[#0A7CFF]/10 peer"
        />
        <label
          htmlFor="name"
          className={`absolute left-4 transition-all duration-300 pointer-events-none bg-white px-1 ${
            isActive('name')
              ? '-top-2.5 text-xs text-[#0A7CFF]'
              : 'top-3.5 text-gray-400 text-[15px]'
          }`}
        >
          Your name
        </label>
      </div>

      {/* Email Field */}
      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => handleFocus('email')}
          onBlur={() => handleBlur('email')}
          required
          placeholder=" "
          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 text-[15px] transition-all duration-300 focus:outline-none focus:border-[#0A7CFF] focus:ring-4 focus:ring-[#0A7CFF]/10 peer"
        />
        <label
          htmlFor="email"
          className={`absolute left-4 transition-all duration-300 pointer-events-none bg-white px-1 ${
            isActive('email')
              ? '-top-2.5 text-xs text-[#0A7CFF]'
              : 'top-3.5 text-gray-400 text-[15px]'
          }`}
        >
          Email address
        </label>
      </div>

      {/* Message Field */}
      <div className="relative">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => handleFocus('message')}
          onBlur={() => handleBlur('message')}
          required
          rows="4"
          placeholder=" "
          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 text-[15px] transition-all duration-300 focus:outline-none focus:border-[#0A7CFF] focus:ring-4 focus:ring-[#0A7CFF]/10 peer resize-none"
        ></textarea>
        <label
          htmlFor="message"
          className={`absolute left-4 transition-all duration-300 pointer-events-none bg-white px-1 ${
            isActive('message')
              ? '-top-2.5 text-xs text-[#0A7CFF]'
              : 'top-3.5 text-gray-400 text-[15px]'
          }`}
        >
          Your message
        </label>
      </div>

      {/* Error Message */}
      {status.error && (
        <div role="alert" className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm flex items-center gap-3">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {status.error}
        </div>
      )}

      {/* Success Message */}
      {status.success && (
        <div role="alert" className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm flex items-center gap-3">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status.submitting}
        className="w-full py-3.5 bg-[#0A7CFF] hover:bg-[#0560CC] text-white rounded-xl font-medium text-[15px] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-[#0A7CFF]/20 hover:shadow-[#0A7CFF]/30 hover:-translate-y-0.5"
      >
        {status.submitting ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We typically respond within 24 hours.
      </p>
    </form>
  );
}
