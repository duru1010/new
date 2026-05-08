// app/api/quotations/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { clientName, items, totalAmount, gstAmount } = body;

    // 1. Validation
    if (!clientName || items.length === 0) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 2. Here is where you would save to a database
    // Example: await prisma.quotation.create({ data: { ... } })
    console.log("Saving Quotation to DB:", { clientName, totalAmount });

    // 3. Return success
    return NextResponse.json({ 
      success: true, 
      message: "Quotation created successfully",
      id: `QTN-${Math.floor(Math.random() * 10000)}` 
    }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}