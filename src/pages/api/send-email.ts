import { Resend } from 'resend';
import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // 1. DEBUG: Check if Key exists
    const apiKey = import.meta.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("CRITICAL ERROR: RESEND_API_KEY is missing/undefined.");
    }

    // 2. Initialize Resend INSIDE the function to catch initialization errors
    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, email, message, phone, b_field } = body;

    // 3. Honeypot Check
    if (b_field) {
      return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
    }

    // 4. Send Email
    const sendResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'davidingram.marketing@gmail.com',
      replyTo: email,
      subject: `Debug Test: ${name}`,
      html: `<p>If you get this, it works!</p><p>${message}</p>`
    });

    if (sendResult.error) {
      throw new Error(`Resend API Error: ${sendResult.error.message}`);
    }

    return new Response(JSON.stringify({ message: "Email sent!" }), { status: 200 });

  } catch (error: any) {
    // 5. RETURN THE ERROR TO THE BROWSER
    console.error(error); // Keep logging just in case
    return new Response(JSON.stringify({
      error: error.message || "Unknown Error",
      stack: error.stack
    }), { status: 500 });
  }
};