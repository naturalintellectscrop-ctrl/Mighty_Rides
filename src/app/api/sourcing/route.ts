import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// POST - Create a new sourcing request
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const sourcingRequest = await db.sourcingRequest.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        preferredContact: data.preferredContact || "WhatsApp",
        preferredMake: data.make || null,
        preferredModel: data.model || null,
        yearFrom: data.yearFrom ? parseInt(data.yearFrom) : null,
        yearTo: data.yearTo ? parseInt(data.yearTo) : null,
        budgetMin: data.budgetMin ? parseInt(data.budgetMin) : null,
        budgetMax: data.budgetMax ? parseInt(data.budgetMax) : null,
        preferredColor: data.preferredColor || null,
        condition: data.condition || null,
        urgency: data.urgency || null,
        additionalFeatures: data.additionalFeatures || null,
        message: data.message || null,
        status: "New",
        source: "Website",
      },
    });
    
    return NextResponse.json({ 
      success: true, 
      id: sourcingRequest.id 
    });
  } catch (error) {
    console.error("Error creating sourcing request:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit request" },
      { status: 500 }
    );
  }
}

// GET - List sourcing requests (for admin)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    
    const where: Record<string, unknown> = {};
    if (status) where.status = status;
    
    const requests = await db.sourcingRequest.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
    });
    
    return NextResponse.json({ success: true, requests });
  } catch (error) {
    console.error("Error fetching sourcing requests:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch requests" },
      { status: 500 }
    );
  }
}
