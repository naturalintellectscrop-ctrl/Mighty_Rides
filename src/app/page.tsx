"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/mighty-rides/navigation";
import { HeroSection } from "@/components/mighty-rides/hero-section";
import { FeaturedInventory } from "@/components/mighty-rides/featured-inventory";
import { RentalsPreview } from "@/components/mighty-rides/rentals-preview";
import { ServicesSection } from "@/components/mighty-rides/services-section";
import { TestimonialsSection } from "@/components/mighty-rides/testimonials-section";
import { AboutSection } from "@/components/mighty-rides/about-section";
import { ContactSection } from "@/components/mighty-rides/contact-section";
import { InventoryView } from "@/components/mighty-rides/inventory-view";
import { VehicleDetailModal } from "@/components/mighty-rides/vehicle-detail-modal";
import { RentalsView } from "@/components/mighty-rides/rentals-view";
import { ServicesView } from "@/components/mighty-rides/services-view";
import { SourcingView } from "@/components/mighty-rides/sourcing-view";
import { AboutView } from "@/components/mighty-rides/about-view";
import { Footer } from "@/components/mighty-rides/footer";
import { Vehicle } from "@/lib/data";

export default function Home() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);

  const handleViewChange = (view: string) => {
    setCurrentView(view);
  };

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  // Render different views based on currentView state
  const renderView = () => {
    switch (currentView) {
      case "inventory":
        return (
          <InventoryView
            onBack={() => setCurrentView("home")}
            onVehicleSelect={handleVehicleSelect}
          />
        );
      case "rentals":
        return <RentalsView onBack={() => setCurrentView("home")} />;
      case "services":
        return <ServicesView onBack={() => setCurrentView("home")} />;
      case "sourcing":
        return <SourcingView onBack={() => setCurrentView("home")} />;
      case "about":
        return <AboutView onBack={() => setCurrentView("home")} />;
      case "contact":
        return (
          <div className="min-h-screen bg-[#0F0F10] pt-24">
            <ContactSection />
          </div>
        );
      default:
        return (
          <>
            {/* Hero Section */}
            <HeroSection onViewChange={handleViewChange} />

            {/* Featured Inventory */}
            <FeaturedInventory
              onViewChange={handleViewChange}
              onVehicleSelect={handleVehicleSelect}
            />

            {/* Rentals Preview */}
            <RentalsPreview onViewChange={handleViewChange} />

            {/* Services Section */}
            <ServicesSection onViewChange={handleViewChange} />

            {/* Testimonials */}
            <TestimonialsSection />

            {/* About Section */}
            <AboutSection />

            {/* Contact Section */}
            <ContactSection />
          </>
        );
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#0F0F10]">
      {/* Navigation */}
      <Navigation
        currentView={currentView}
        onViewChange={handleViewChange}
      />

      {/* Main Content */}
      <div className="flex-1">
        {renderView()}
      </div>

      {/* Footer */}
      <Footer />

      {/* Vehicle Detail Modal */}
      <VehicleDetailModal
        vehicle={selectedVehicle}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </main>
  );
}
