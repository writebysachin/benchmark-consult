import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Destinations from "@/components/sections/Destinations";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import EligibilityForm from "@/components/sections/EligibilityForm";
import BlogPreview from "@/components/sections/BlogPreview";
import Universities from "@/components/sections/Universities";
import CTA from "@/components/sections/CTA";
import { MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <Destinations />
        <Services />
        <Process />
        <Testimonials />
        <EligibilityForm />
        <BlogPreview />
        <Universities />
        <CTA />
      </main>
      <Footer />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/97798XXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
}
