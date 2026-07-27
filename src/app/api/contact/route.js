import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// Quote-request endpoint. Sends via the cPanel mailbox configured in env:
//   SMTP_HOST  e.g. mail.yourdomain.com
//   SMTP_PORT  465 (SSL) or 587 (STARTTLS)
//   SMTP_USER  full mailbox address, e.g. forms@yourdomain.com
//   SMTP_PASS  mailbox password
//   CONTACT_TO recipient (the cPanel address that forwards to the client's Gmail)
export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, email, message, company } = body || {};

  // honeypot — bots fill it; pretend everything went fine
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, email, and message." },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("contact form: SMTP env vars are not configured");
    return NextResponse.json(
      { ok: false, error: "Mail service is not configured." },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[c]);

  try {
    await transporter.sendMail({
      from: `"BAR Striping Website" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: email,
      subject: `Quote request from ${name} — barstripingservices.com`,
      text:
        `New quote request from the website:\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone || "—"}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}\n`,
      html:
        `<h2 style="margin:0 0 12px">New quote request</h2>` +
        `<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">` +
        `<tr><td><b>Name</b></td><td>${esc(name)}</td></tr>` +
        `<tr><td><b>Phone</b></td><td>${esc(phone) || "—"}</td></tr>` +
        `<tr><td><b>Email</b></td><td>${esc(email)}</td></tr>` +
        `<tr><td valign="top"><b>Message</b></td><td>${esc(message).replace(/\n/g, "<br>")}</td></tr>` +
        `</table>`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact form: failed to send", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}
