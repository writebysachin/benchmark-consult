import { Button } from "@/components/ui/Button";
import { Phone, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden"
      aria-label="Call to action"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-orange-100 text-sm font-semibold uppercase tracking-widest mb-4">
          Your future starts now
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
          Join 10,000+ Students on Their
          <br />
          Study Abroad Journey
        </h2>
        <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Book your free consultation today — let&apos;s kickstart your study
          abroad journey together.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            href="#eligibility"
            variant="ghost"
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-50 shadow-xl"
          >
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            href="tel:+97714000000"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-orange-600"
          >
            <Phone className="w-4 h-4" /> Call Us Now
          </Button>
        </div>

        {/* Stat strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {[
            { label: "Students Helped", value: "10,000+" },
            { label: "Countries", value: "15+" },
            { label: "Years Experience", value: "12+" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-extrabold text-white">{s.value}</p>
              <p className="text-orange-100 text-xs uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
