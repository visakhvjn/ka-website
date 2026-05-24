import { NextResponse } from "next/server";
import { site } from "@/data/site";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  subject?: string;
};

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: "Contact form is not configured." },
      { status: 503 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const { name, email, phone, service, message, subject } = payload;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { success: false, message: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: subject?.trim() || `Consultation request from ${name.trim()}`,
      from_name: site.shortName,
      name: name.trim(),
      email: email.trim(),
      replyto: email.trim(),
      phone: phone?.trim() || "Not provided",
      service: service?.trim() || "Not specified",
      message: message.trim(),
    }),
  });

  const result = (await response.json()) as {
    success?: boolean;
    message?: string;
  };

  if (!response.ok || !result.success) {
    return NextResponse.json(
      {
        success: false,
        message: result.message ?? "Failed to send message.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
