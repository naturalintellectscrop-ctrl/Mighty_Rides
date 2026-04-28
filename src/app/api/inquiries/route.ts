import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// POST /api/inquiries - Create a new inquiry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    switch (type) {
      case "vehicle": {
        const inquiry = await db.vehicleInquiry.create({
          data: {
            vehicleId: data.vehicleId,
            name: data.name,
            email: data.email,
            phone: data.phone,
            preferredContact: data.preferredContact || "Phone",
            message: data.message,
          },
        });
        return NextResponse.json({ success: true, id: inquiry.id });
      }

      case "rental": {
        const inquiry = await db.rentalInquiry.create({
          data: {
            rentalId: data.rentalId,
            name: data.name,
            email: data.email,
            phone: data.phone,
            occasion: data.occasion,
            startDate: data.startDate,
            endDate: data.endDate,
            message: data.message,
          },
        });
        return NextResponse.json({ success: true, id: inquiry.id });
      }

      case "sourcing": {
        const request = await db.sourcingRequest.create({
          data: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            preferredMake: data.preferredMake,
            preferredModel: data.preferredModel,
            yearFrom: data.yearFrom ? parseInt(data.yearFrom) : null,
            yearTo: data.yearTo ? parseInt(data.yearTo) : null,
            budgetMin: data.budgetMin ? parseInt(data.budgetMin) : null,
            budgetMax: data.budgetMax ? parseInt(data.budgetMax) : null,
            preferredColor: data.preferredColor,
            condition: data.condition,
            timeline: data.timeline,
            message: data.message,
          },
        });
        return NextResponse.json({ success: true, id: request.id });
      }

      case "service": {
        const inquiry = await db.serviceInquiry.create({
          data: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            serviceType: data.serviceType,
            vehicleInfo: data.vehicleInfo,
            message: data.message,
          },
        });
        return NextResponse.json({ success: true, id: inquiry.id });
      }

      case "contact": {
        const message = await db.contactMessage.create({
          data: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message,
          },
        });
        return NextResponse.json({ success: true, id: message.id });
      }

      default:
        return NextResponse.json({ error: "Invalid inquiry type" }, { status: 400 });
    }
  } catch (error) {
    console.error("Inquiry creation error:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}

// GET /api/inquiries - Get all inquiries (admin)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    let results;

    switch (type) {
      case "vehicle":
        results = await db.vehicleInquiry.findMany({
          include: { vehicle: true },
          orderBy: { createdAt: "desc" },
        });
        break;
      case "rental":
        results = await db.rentalInquiry.findMany({
          include: { rental: true },
          orderBy: { createdAt: "desc" },
        });
        break;
      case "sourcing":
        results = await db.sourcingRequest.findMany({
          orderBy: { createdAt: "desc" },
        });
        break;
      case "service":
        results = await db.serviceInquiry.findMany({
          orderBy: { createdAt: "desc" },
        });
        break;
      case "contact":
        results = await db.contactMessage.findMany({
          orderBy: { createdAt: "desc" },
        });
        break;
      default:
        return NextResponse.json({ error: "Invalid inquiry type" }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: results });
  } catch (error) {
    console.error("Fetch inquiries error:", error);
    return NextResponse.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}
