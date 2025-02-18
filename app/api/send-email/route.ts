import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mahameherrr@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
    const mailOptions = {
      from: email,
      to: "mahameherrr@gmail.com",
      subject: "New Contact From Message",
      text: `From: ${email}\n\nMessage:\n${message}`,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed To Send Message" },
      { status: 500 }
    );
  }
}
