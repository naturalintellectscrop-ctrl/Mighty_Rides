"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-[#1A1C1F] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-pattern opacity-20" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#C6A969]/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-[#C6A969]/30 text-[#C6A969] mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Excellence
          </h2>
          <p className="text-[#8B8F96] text-lg max-w-2xl mx-auto">
            Hear from our distinguished clients who have experienced 
            the Mighty Rides difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="bg-[#0F0F10] border-border hover:border-[#C6A969]/20 transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-[#C6A969]/30 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C6A969] text-[#C6A969]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#8B8F96] mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C6A969] to-[#B8A05A] flex items-center justify-center">
                    <span className="text-[#0F0F10] font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-[#8B8F96]">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Vehicle */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-xs text-[#8B8F96]">
                    Purchased: <span className="text-white">{testimonial.vehiclePurchased}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "$50M+", label: "Value Sold" },
            { value: "15+", label: "Years Experience" },
            { value: "100%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-[#0F0F10] border border-border"
            >
              <p className="text-3xl md:text-4xl font-bold text-[#C6A969] mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-[#8B8F96]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
