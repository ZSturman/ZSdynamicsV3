// api/send-analytics/route.ts

import type { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactFormRequestBody = {
  name: string;
  email: string;
  message: string;
};

async function sendEmail(mailOptions: {
  from: string;
  to: string;
  subject: string;
  text: string;
}) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  await transporter.sendMail(mailOptions);
}



export async function POST(req: NextRequest, res: NextResponse) {
  if (!req.headers.get("content-type")) {
    return Response.json({ error: "Missing content type" }, { status: 400 });
  }

  if (req.headers.get("content-type") !== "application/json") {
    return Response.json({ error: "Invalid content type" }, { status: 400 });
  }

  const body = await req.json();

  // Distinguish between analytics and contact form submissions with Validation
  if (body.hasOwnProperty("name") && body.hasOwnProperty("email")) {
    await handleContactFormSubmission(body as ContactFormRequestBody);
  } /* else {
    await handleAnalytics(body as AnalyticsRequestBody);
  } */

  return Response.json(
    { message: "Request processed successfully" },
    { status: 200 }
  );
}

async function handleContactFormSubmission(formData: ContactFormRequestBody) {
  const mailOptions = {
    from: formData.email,
    to: "zasturman@gmail.com",
    subject: `Contact Form Submission from ${formData.name}`,
    text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `,
  };

  if (mailOptions.to !== "zasturman@gmail.com") {
    return Response.json(
      { error: "Invalid recipient email address" },
      { status: 400 }
    );
  }

  try {
    await sendEmail(mailOptions);
    return Response.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error: "Email sending failed" }, { status: 500 });
  }
}

/* 
async function handleAnalytics(analyticsData: AnalyticsRequestBody) {
  const DEFAULT_FROM = "zacharysturman@zsdynamics.com";
  const DEFAULT_TO = "zasturman@gmail.com";
  const DEFAULT_SUBJECT = "Default Subject";
  const DEFAULT_TEXT = "This is the default email content.";

  const {
    from = DEFAULT_FROM,
    to = DEFAULT_TO,
    subject = DEFAULT_SUBJECT,
    text = DEFAULT_TEXT,
  } = analyticsData;

  if (to !== "zasturman@gmail.com") {
    return Response.json(
      { error: "Invalid recipient email address" },
      { status: 400 }
    );
  }

  try {
    await sendEmail({ from, to, subject, text });
    return Response.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error: "Email sending failed" }, { status: 500 });
  }
}
 */