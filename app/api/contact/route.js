import { NextResponse } from 'next/server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message, service } = body;

    try {
      const data = await resend.emails.send({
        from: 'info@fiery.tools',
        to: ['pguardiario@gmail.com'],
        subject: "Royal Blue Crew Service Request",
        html: `<div>
          <p>Name: ${firstName} ${lastName}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Service: ${service}</p>
          <p>Message: ${message}</p>
        </div>`,
      })
    } catch(e) {
      debugger
    }


    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
