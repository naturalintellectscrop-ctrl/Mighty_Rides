import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/vehicles - Get all vehicles with filters
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const make = searchParams.get("make");
    const model = searchParams.get("model");
    const bodyType = searchParams.get("bodyType");
    const fuelType = searchParams.get("fuelType");
    const condition = searchParams.get("condition");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const minYear = searchParams.get("minYear");
    const maxYear = searchParams.get("maxYear");
    const featured = searchParams.get("featured");
    const sortBy = searchParams.get("sortBy") || "createdAt";
    const sortOrder = searchParams.get("sortOrder") || "desc";

    // Build filter object
    const where: Record<string, unknown> = {
      isSold: false,
    };

    if (make) where.make = { contains: make, mode: "insensitive" };
    if (model) where.model = { contains: model, mode: "insensitive" };
    if (bodyType) where.bodyType = bodyType;
    if (fuelType) where.fuelType = fuelType;
    if (condition) where.condition = condition;
    if (featured === "true") where.isFeatured = true;

    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price = { ...where.price, gte: parseInt(minPrice) };
      if (maxPrice) where.price = { ...where.price, lte: parseInt(maxPrice) };
    }

    if (minYear || maxYear) {
      where.year = {};
      if (minYear) where.year = { ...where.year, gte: parseInt(minYear) };
      if (maxYear) where.year = { ...where.year, lte: parseInt(maxYear) };
    }

    const vehicles = await db.vehicle.findMany({
      where,
      orderBy: {
        [sortBy]: sortOrder,
      },
    });

    return NextResponse.json({ success: true, data: vehicles });
  } catch (error) {
    console.error("Fetch vehicles error:", error);
    return NextResponse.json(
      { error: "Failed to fetch vehicles" },
      { status: 500 }
    );
  }
}

// POST /api/vehicles - Create a new vehicle (admin)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const vehicle = await db.vehicle.create({
      data: {
        make: body.make,
        model: body.model,
        year: parseInt(body.year),
        price: parseInt(body.price),
        mileage: parseInt(body.mileage),
        engine: body.engine,
        transmission: body.transmission,
        fuelType: body.fuelType,
        bodyType: body.bodyType,
        color: body.color,
        condition: body.condition,
        description: body.description,
        features: body.features ? JSON.stringify(body.features) : null,
        images: body.images ? JSON.stringify(body.images) : null,
        isFeatured: body.isFeatured || false,
        isSold: false,
      },
    });

    return NextResponse.json({ success: true, id: vehicle.id });
  } catch (error) {
    console.error("Vehicle creation error:", error);
    return NextResponse.json(
      { error: "Failed to create vehicle" },
      { status: 500 }
    );
  }
}
