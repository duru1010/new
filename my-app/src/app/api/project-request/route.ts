import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, mobile, service, message, clientName, totalAmount, pdfBase64 } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false 
      }
    });

    let mailOptions: any = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
    };

    if (pdfBase64) {
      // Logic for Quotation Generator
      mailOptions.subject = `Softlink Quote: ${clientName || 'Client'}`;
      mailOptions.text = `New quotation generated for ${clientName}.\nTotal Amount: INR ${totalAmount}`;
      mailOptions.attachments = [{
        filename: `Quotation_${(clientName || 'Doc').replace(/\s+/g, '_')}.pdf`,
        content: pdfBase64,
        encoding: 'base64',
      }];
    } else {
      // Logic for Navbar Project Request
      mailOptions.subject = `New Project Request: ${service}`;
      mailOptions.html = `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #25C1C5; border-radius: 15px; background-color: #f9f9f9;">
          <h2 style="color: #25C1C5; border-bottom: 2px solid #25C1C5; padding-bottom: 10px;">Project Inquiry Details</h2>
          <p><strong>Client Name:</strong> ${fullName}</p>
          <p><strong>Mobile Number:</strong> ${mobile}</p>
          <p><strong>Service Interested:</strong> ${service}</p>
          <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 10px;">
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
        </div>
      `;
    }

    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, id: info.messageId }, { status: 201 });

  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}