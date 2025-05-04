import { NextResponse } from 'next/server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const data = await resend.emails.send({
      from: 'info@fiery.tools',
      to: ['pguardiario@gmail.com'],
      subject: subject,
      html: `<div>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Subject: ${subject}</p>
        <p>Message: ${message}</p>
      </div>`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
