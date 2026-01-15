import { Resend } from 'resend';
import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey = import.meta.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("Missing API Key");
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, message, phone, b_field } = body;

    // 1. Honeypot Check (Silent Success for bots)
    if (b_field) {
      return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
    }

    // 2. Validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    // 3. Send Professional Email
    const sendResult = await resend.emails.send({
      from: 'onboarding@resend.dev', // Change to 'contact@davidringram.com' after verification
      to: 'davidingram.marketing@gmail.com',
      replyTo: email,
      subject: `New Inquiry! (${name})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0f172a; padding: 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0;">New Website Inquiry</h2>
          </div>
          
          <div style="padding: 20px; background-color: #f8fafc;">
            <p style="margin: 5px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Contact Details</p>
            <div style="background-color: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <p style="margin: 8px 0; color: #334155;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0; color: #334155;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
              <p style="margin: 8px 0; color: #334155;"><strong>Phone:</strong> ${phone || '<span style="color: #94a3b8;">Not provided</span>'}</p>
            </div>

            <p style="margin: 20px 0 5px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Message</p>
            <div style="background-color: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0; color: #334155; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 10px; text-align: center; color: #94a3b8; font-size: 12px;">
            Sent from DIM&C Secure Form
          </div>
        </div>
      `,
    });

    if (sendResult.error) {
      console.error(sendResult.error);
      throw new Error(sendResult.error.message);
    }

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });

  } catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message || "Server Error" }), { status: 500 });
  }
};