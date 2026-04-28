"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Fuel, Gauge, Settings } from "lucide-react";
import { vehicles, Vehicle } from "@/lib/data";

interface FeaturedInventoryProps {
  onViewChange: (view: string) => void;
  onVehicleSelect: (vehicle: Vehicle) => void;
}

export function FeaturedInventory({ onViewChange, onVehicleSelect }: FeaturedInventoryProps) {
  const featuredVehicles = vehicles.filter(v => v.isFeatured && !v.isSold).slice(0, 4);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-UG", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-20 md:py-32 bg-[#0F0F10] relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C6A969]/3 rounded-full blur-[150px] translate-x-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Badge variant="outline" className="border-[#C6A969]/30 text-[#C6A969] mb-4">
              Featured Vehicles
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Curated Selection
            </h2>
            <p className="text-[#8B8F96] text-lg max-w-xl">
              Hand-picked luxury vehicles representing the finest in automotive excellence.
            </p>
          </div>
          <Button
            onClick={() => onViewChange("inventory")}
            variant="ghost"
            className="text-[#C6A969] hover:text-[#D4B87A] hover:bg-[#C6A969]/10 group"
          >
            View All Inventory
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Vehicle Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVehicles.map((vehicle, index) => (
            <Card
              key={vehicle.id}
              className="bg-[#1A1C1F] border-border hover:border-[#C6A969]/30 transition-all duration-300 cursor-pointer group overflow-hidden"
              onClick={() => onVehicleSelect(vehicle)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-[#0F0F10] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#1A1C1F] flex items-center justify-center">
                    <Settings className="w-8 h-8 text-[#C6A969]/50" />
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0F0F10]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    size="sm"
                    className="bg-[#C6A969] text-[#0F0F10] hover:bg-[#D4B87A]"
                  >
                    View Details
                  </Button>
                </div>

                {/* Condition Badge */}
                {vehicle.condition === "New" && (
                  <Badge className="absolute top-3 left-3 bg-[#C6A969] text-[#0F0F10] text-xs">
                    New
                  </Badge>
                )}
              </div>

              <CardContent className="p-5">
                {/* Make & Model */}
                <div className="mb-3">
                  <p className="text-sm text-[#8B8F96] mb-1">{vehicle.make}</p>
                  <h3 className="text-lg font-semibold text-white truncate">
                    {vehicle.model} {vehicle.year}
                  </h3>
                </div>

                {/* Specs */}
                <div className="flex items-center gap-4 text-xs text-[#8B8F96] mb-4">
                  <div className="flex items-center gap-1">
                    <Gauge className="w-3.5 h-3.5" />
                    <span>{vehicle.mileage.toLocaleString()} km</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Fuel className="w-3.5 h-3.5" />
                    <span>{vehicle.fuelType}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-white">
                    {formatPrice(vehicle.price)}
                  </p>
                  <Badge variant="secondary" className="bg-[#0F0F10] text-[#8B8F96] text-xs">
                    {vehicle.bodyType}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button - Mobile */}
        <div className="mt-10 text-center lg:hidden">
          <Button
            onClick={() => onViewChange("inventory")}
            className="bg-[#C6A969] text-[#0F0F10] hover:bg-[#D4B87A] px-8"
          >
            View All Inventory
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
