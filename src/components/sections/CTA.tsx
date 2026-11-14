import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-orange-500 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-orange-100 text-sm font-semibold uppercase tracking-widest mb-4">Your future starts now</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
          Join 10,000+ Students on Their<br />Study Abroad Journey
        </h2>
        <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto">
          Book your free consultation today — let&apos;s kickstart your study abroad journey together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#eligibility" className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-xl">
            Get Free Consultation <ArrowRight className="w-5 h-5" />
          </a>
          <a href="tel:+97714000000" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold px-8 py-4 rounded-full text-lg transition-all">
            <Phone className="w-5 h-5" /> Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
