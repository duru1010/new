process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      mobile,
      service,
      message,
    } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

      tls: {
        rejectUnauthorized: false,
        ciphers: "SSLv3",
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,

      subject: `New Inquiry - ${service}`,

      html: `
        <div>
          <h2>New Computer Rental Inquiry</h2>

          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Service:</strong> ${service}</p>

          <div>
            <strong>Message:</strong>
            <p>${message}</p>
          </div>
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