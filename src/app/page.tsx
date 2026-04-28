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
import { RentalDetailModal } from "@/components/mighty-rides/rental-detail-modal";
import { ServicesView } from "@/components/mighty-rides/services-view";
import { SourcingView } from "@/components/mighty-rides/sourcing-view";
import { AboutView } from "@/components/mighty-rides/about-view";
import { BlogView } from "@/components/mighty-rides/blog-view";
import { BlogArticleView } from "@/components/mighty-rides/blog-article-view";
import { Footer } from "@/components/mighty-rides/footer";
import { Vehicle, RentalVehicle, blogPosts } from "@/lib/data";

export default function Home() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [selectedRental, setSelectedRental] = useState<RentalVehicle | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<typeof blogPosts[0] | null>(null);
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
  const [isRentalModalOpen, setIsRentalModalOpen] = useState(false);

  // Handle scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);

  const handleViewChange = (view: string) => {
    setCurrentView(view);
  };

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsVehicleModalOpen(true);
  };

  const handleRentalSelect = (rental: RentalVehicle) => {
    setSelectedRental(rental);
    setIsRentalModalOpen(true);
  };

  const handleArticleSelect = (article: typeof blogPosts[0]) => {
    setSelectedArticle(article);
    setCurrentView("blog-article");
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
        return (
          <RentalsView
            onBack={() => setCurrentView("home")}
            onRentalSelect={handleRentalSelect}
          />
        );
      case "services":
        return <ServicesView onBack={() => setCurrentView("home")} />;
      case "sourcing":
        return <SourcingView onBack={() => setCurrentView("home")} />;
      case "about":
        return <AboutView onBack={() => setCurrentView("home")} />;
      case "blog":
        return (
          <BlogView
            onBack={() => setCurrentView("home")}
            onArticleSelect={handleArticleSelect}
          />
        );
      case "blog-article":
        return selectedArticle ? (
          <BlogArticleView
            article={selectedArticle}
            onBack={() => setCurrentView("blog")}
            onArticleSelect={handleArticleSelect}
          />
        ) : null;
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

            {/* Blog Preview */}
            <section className="py-20 md:py-32 bg-[#0F0F10] relative">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                  <p className="text-[#C6A969] text-sm uppercase tracking-widest mb-4">Insights & Guides</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Automotive Expertise
                  </h2>
                  <p className="text-[#8B8F96] text-lg max-w-2xl mx-auto">
                    Expert guides, buying tips, and industry insights from our team.
                  </p>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => setCurrentView("blog")}
                    className="inline-flex items-center gap-2 text-[#C6A969] hover:text-[#D4B87A] font-medium group"
                  >
                    View All Articles
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </section>

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
        open={isVehicleModalOpen}
        onOpenChange={setIsVehicleModalOpen}
      />

      {/* Rental Detail Modal */}
      <RentalDetailModal
        rental={selectedRental}
        open={isRentalModalOpen}
        onOpenChange={setIsRentalModalOpen}
      />
    </main>
  );
}
