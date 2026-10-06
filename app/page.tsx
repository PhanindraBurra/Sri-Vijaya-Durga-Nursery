import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PlantGrowthSection from "@/components/PlantGrowthSection";
import CategoriesSection from "@/components/CategoriesSection";
import PlantExplorer from "@/components/PlantExplorer";
import WhyChooseUs from "@/components/WhyChooseUs";
import PlantCareSection from "@/components/PlantCareSection";
import LandscapingSection from "@/components/LandscapingSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CustomCursor from "@/components/CustomCursor";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <AboutSection />
      <PlantGrowthSection />
      <CategoriesSection />
      <PlantExplorer />
      <WhyChooseUs />
      <PlantCareSection />
      <LandscapingSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
