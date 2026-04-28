"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Plane, Briefcase, Crown, Calendar, Clock, ArrowRight } from "lucide-react";
import { rentalCategories, rentalVehicles } from "@/lib/data";

interface RentalsPreviewProps {
  onViewChange: (view: string) => void;
}

const categoryIcons: Record<string, React.ElementType> = {
  Heart: Heart,
  Plane: Plane,
  Briefcase: Briefcase,
  Crown: Crown,
  Calendar: Calendar,
  Clock: Clock,
};

export function RentalsPreview({ onViewChange }: RentalsPreviewProps) {
  return (
    <section className="py-20 md:py-32 bg-[#1A1C1F] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-pattern opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-[#C6A969]/30 text-[#C6A969] mb-4">
            Premium Rentals
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Luxury for Every Occasion
          </h2>
          <p className="text-[#8B8F96] text-lg max-w-2xl mx-auto">
            From weddings to corporate events, our premium rental fleet delivers 
            exceptional experiences tailored to your needs.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rentalCategories.map((category, index) => {
            const IconComponent = categoryIcons[category.icon] || Heart;
            return (
              <Card
                key={category.id}
                className="bg-[#0F0F10] border-border hover:border-[#C6A969]/30 transition-all duration-300 cursor-pointer group"
                onClick={() => onViewChange("rentals")}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#C6A969]/10 flex items-center justify-center group-hover:bg-[#C6A969]/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-[#C6A969]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#C6A969] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-[#8B8F96]">
                        {category.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#8B8F96] group-hover:text-[#C6A969] transition-colors" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Rental */}
        <div className="bg-[#0F0F10] rounded-2xl border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[400px] bg-gradient-to-br from-[#1A1C1F] to-[#0F0F10]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#1A1C1F] border border-[#C6A969]/30 flex items-center justify-center">
                  <Crown className="w-10 h-10 text-[#C6A969]/50" />
                </div>
              </div>
              <Badge className="absolute top-4 left-4 bg-[#C6A969] text-[#0F0F10]">
                Featured
              </Badge>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <Badge variant="outline" className="border-[#C6A969]/30 text-[#C6A969] w-fit mb-4">
                Wedding Special
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Executive Wedding Fleet
              </h3>
              <p className="text-[#8B8F96] mb-6">
                Make your special day unforgettable with our Mercedes S-Class wedding package. 
                Includes professional chauffeur, champagne service, and red carpet treatment.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-[#1A1C1F]">
                  <p className="text-2xl font-bold text-white">$800</p>
                  <p className="text-sm text-[#8B8F96]">Daily Rate</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1A1C1F]">
                  <p className="text-2xl font-bold text-white">$4,800</p>
                  <p className="text-sm text-[#8B8F96]">Weekly Rate</p>
                </div>
              </div>

              <Button
                onClick={() => onViewChange("rentals")}
                className="bg-[#C6A969] text-[#0F0F10] hover:bg-[#D4B87A] w-fit"
              >
                View Rental Options
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
