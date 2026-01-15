import { Resend } from 'resend';
import type { APIRoute } from 'astro';
import { z } from 'zod'; // 1. Import Zod

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// 2. Define the "Perfect" Schema
const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  b_field: z.string().max(0).optional(), // 3. The Honeypot trap (must be empty)
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    // 4. Validate Data against the Schema
    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      // Return specific error messages to the frontend
      const firstError = result.error.errors[0].message;
      return new Response(JSON.stringify({ error: firstError }), { status: 400 });
    }

    const { name, email, phone, message, b_field } = result.data;

    // 5. Check the Honeypot
    if (b_field) {
      // If honeypot is filled, we lie to the bot and say "Success" 
      // so they don't try again, but we send NOTHING.
      return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
    }

    // 6. Send the "God-Tier" HTML Email
    const sendResult = await resend.emails.send({
      from: 'onboarding@resend.dev', // Remember: Verify domain to change this
      to: 'davidingram.marketing@gmail.com',
      replyTo: email,
      subject: `🚀 New Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #1e293b;">New Inquiry Received</h2>
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; margin-bottom: 20px;">
            <p style="margin: 8px 0;"><strong>👤 Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 8px 0;"><strong>📱 Phone:</strong> ${phone || '<span style="color: #94a3b8;">Not provided</span>'}</p>
          </div>
          <h3 style="color: #475569; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Message</h3>
          <p style="font-size: 16px; line-height: 1.6; color: #334155;">${message.replace(/\n/g, '<br>')}</p>
          <div style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center;">
            Sent from your <strong>DIM&C</strong> Website Form
          </div>
        </div>
      `,
    });

    if (sendResult.error) {
      return new Response(JSON.stringify({ error: sendResult.error }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
};