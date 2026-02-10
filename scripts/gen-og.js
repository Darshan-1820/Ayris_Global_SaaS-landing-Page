const sharp = require('sharp');
const base = 'C:/Users/addar/Desktop/Ayris_Global_SaaS-landing-Page';
const WIDTH = 1200;
const HEIGHT = 630;

async function createOGImage() {
  const logo = await sharp(base + '/public/logo.png')
    .resize(160, 85, { fit: 'inside', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#f8fafc"/>
        <stop offset="40%" style="stop-color:#eff6ff"/>
        <stop offset="100%" style="stop-color:#fff7ed"/>
      </linearGradient>
      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#0A7CFF"/>
        <stop offset="100%" style="stop-color:#06B6D4"/>
      </linearGradient>
      <radialGradient id="blueBlob" cx="85%" cy="15%" r="35%">
        <stop offset="0%" style="stop-color:#0A7CFF;stop-opacity:0.15"/>
        <stop offset="100%" style="stop-color:#0A7CFF;stop-opacity:0"/>
      </radialGradient>
      <radialGradient id="orangeBlob" cx="10%" cy="85%" r="30%">
        <stop offset="0%" style="stop-color:#F97316;stop-opacity:0.12"/>
        <stop offset="100%" style="stop-color:#F97316;stop-opacity:0"/>
      </radialGradient>
    </defs>

    <!-- Background -->
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="12" cy="12" r="1" fill="#94a3b8" opacity="0.15"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#dots)"/>
    <rect width="100%" height="100%" fill="url(#blueBlob)"/>
    <rect width="100%" height="100%" fill="url(#orangeBlob)"/>

    <!-- Ayris Global text next to logo -->
    <text x="255" y="170" font-family="system-ui, -apple-system, sans-serif" font-size="40" font-weight="700" fill="#0f172a" letter-spacing="-0.5">Ayris Global</text>

    <!-- Headline -->
    <text x="80" y="290" font-family="system-ui, -apple-system, sans-serif" font-size="58" font-weight="700" fill="#0f172a" letter-spacing="-1">Build payments that</text>
    <text x="80" y="360" font-family="system-ui, -apple-system, sans-serif" font-size="58" font-weight="700" fill="url(#blueGrad)" letter-spacing="-1">just work.</text>

    <!-- Subtext -->
    <text x="80" y="410" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="600" fill="#475569">Modular, cloud-native payment infrastructure</text>
    <text x="80" y="438" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="600" fill="#475569">for modern enterprises.</text>

    <!-- Pills -->
    <rect x="80" y="480" rx="20" ry="20" width="175" height="38" fill="rgba(10,124,255,0.08)"/>
    <text x="167" y="505" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#0A7CFF" text-anchor="middle">PCI-DSS Compliant</text>
    <rect x="270" y="480" rx="20" ry="20" width="165" height="38" fill="rgba(249,115,22,0.08)"/>
    <text x="352" y="505" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#F97316" text-anchor="middle">&lt; 5s Provisioning</text>
    <rect x="450" y="480" rx="20" ry="20" width="145" height="38" fill="rgba(6,182,212,0.08)"/>
    <text x="522" y="505" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#06B6D4" text-anchor="middle">Cloud-Native</text>

    <!-- Watermark -->
    <text x="1120" y="505" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#94a3b8" text-anchor="end">ayrisglobal.com</text>
    <line x1="80" y1="540" x2="1120" y2="540" stroke="#e2e8f0" stroke-width="1"/>
  </svg>`;

  await sharp(Buffer.from(svg))
    .composite([{ input: logo, top: 110, left: 80 }])
    .png()
    .toFile(base + '/public/og-image.png');

  console.log('OG image updated with Ayris Global text');
}

createOGImage().catch(console.error);
