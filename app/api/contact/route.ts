import { NextRequest, NextResponse } from 'next/server';

// In-memory rate limiting store
const rateLimitStore = new Map<string, { count: number; last: number }>();
const RATE_LIMIT = 5; // max 5 requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

export async function POST(req: NextRequest) {
  const { name, email, message, website } = await req.json();
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  // Honeypot: if website field is filled, treat as spam
  if (website) {
    return NextResponse.json({ success: true });
  }

  // Rate limiting by IP
  const ip = req.headers.get('x-forwarded-for') || req.ip || 'unknown';
  const now = Date.now();
  const entry = rateLimitStore.get(ip) || { count: 0, last: now };
  if (now - entry.last > RATE_LIMIT_WINDOW) {
    entry.count = 0;
    entry.last = now;
  }
  entry.count++;
  entry.last = now;
  rateLimitStore.set(ip, entry);
  if (entry.count > RATE_LIMIT) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: 'Resend API key not set.' }, { status: 500 });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>',
        to: ['mischa.mez@gmail.com'],
        subject: `New message from ${name}`,
        reply_to: email,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });
    if (!res.ok) {
      const error = await res.text();
      return NextResponse.json({ error }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error?.toString() || 'Unknown error' }, { status: 500 });
  }
} 