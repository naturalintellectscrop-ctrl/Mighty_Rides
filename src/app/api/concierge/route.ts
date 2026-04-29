import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// POST - Create a new concierge request
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const conciergeRequest = await db.conciergeRequest.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        preferredContact: data.preferredContact || "WhatsApp",
        requestType: data.requestType,
        vehicleId: data.vehicleId || null,
        preferredVehicle: data.preferredVehicle || null,
        purchaseTimeline: data.purchaseTimeline || "Not specified",
        budgetRange: data.budgetRange || "Not specified",
        financingPreference: data.financingPreference || null,
        tradeInConsideration: data.tradeInConsideration || false,
        message: data.message || null,
        status: "New",
        priority: data.budgetRange?.includes("200k") || data.budgetRange?.includes("500k") ? "VIP" : 
                  data.budgetRange?.includes("100k") ? "Premium" : "Standard",
        source: "Website",
      },
    });
    
    return NextResponse.json({ 
      success: true, 
      id: conciergeRequest.id 
    });
  } catch (error) {
    console.error("Error creating concierge request:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit request" },
      { status: 500 }
    );
  }
}

// GET - List concierge requests (for admin)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const priority = searchParams.get("priority");
    
    const where: Record<string, unknown> = {};
    if (status) where.status = status;
    if (priority) where.priority = priority;
    
    const requests = await db.conciergeRequest.findMany({
      where,
      include: {
        vehicle: {
          select: {
            make: true,
            model: true,
            year: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    
    return NextResponse.json({ success: true, requests });
  } catch (error) {
    console.error("Error fetching concierge requests:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch requests" },
      { status: 500 }
    );
  }
}
