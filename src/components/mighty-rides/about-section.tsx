"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Clock, Users, MapPin, Phone, Mail } from "lucide-react";
import { contactInfo, teamMembers } from "@/lib/data";

export function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-[#0F0F10] relative">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[400px] bg-[#C6A969]/5 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-[#C6A969]/30 text-[#C6A969] mb-4">
            About Us
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            East Africa&apos;s Premium Choice
          </h2>
          <p className="text-[#8B8F96] text-lg max-w-2xl mx-auto">
            For over 15 years, Mighty Rides has been setting the standard for 
            premium automotive excellence in East Africa.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-[#8B8F96] leading-relaxed">
              <p>
                Founded with a vision to bring world-class automotive services to East Africa, 
                Mighty Rides has grown from a small dealership to the region&apos;s most trusted 
                name in premium vehicles.
              </p>
              <p>
                Our commitment to excellence extends beyond just selling cars. We believe in 
                building lasting relationships with our clients, understanding their unique needs, 
                and delivering experiences that exceed expectations.
              </p>
              <p>
                Today, we serve a distinguished clientele including business leaders, diplomats, 
                and discerning individuals who demand nothing but the best.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Shield, title: "Trust", description: "Built on integrity and transparency" },
              { icon: Award, title: "Excellence", description: "Premium quality in everything" },
              { icon: Clock, title: "Reliability", description: "Consistent, dependable service" },
              { icon: Users, title: "Relationship", description: "Long-term client partnerships" },
            ].map((value, index) => (
              <Card key={index} className="bg-[#1A1C1F] border-border">
                <CardContent className="p-6">
                  <value.icon className="w-8 h-8 text-[#C6A969] mb-4" />
                  <h4 className="font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-sm text-[#8B8F96]">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Contact */}
        <div className="bg-[#1A1C1F] rounded-2xl border border-border overflow-hidden">
          <div className="p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
              Visit Our Showroom
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C6A969]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C6A969]" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Location</p>
                  <p className="text-sm text-[#8B8F96]">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C6A969]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#C6A969]" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Phone</p>
                  <p className="text-sm text-[#8B8F96]">{contactInfo.phones[0]}</p>
                  <p className="text-sm text-[#8B8F96]">{contactInfo.phones[1]}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C6A969]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#C6A969]" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Email</p>
                  <p className="text-sm text-[#8B8F96]">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C6A969]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#C6A969]" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Hours</p>
                  <p className="text-sm text-[#8B8F96]">Mon-Fri: {contactInfo.hours.weekdays}</p>
                  <p className="text-sm text-[#8B8F96]">Sat: {contactInfo.hours.saturday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
