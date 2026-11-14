import { DESTINATIONS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="py-20 bg-slate-50"
      aria-label="Study destinations"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Where will you go?"
            title="Popular Study"
            titleHighlight="Destinations"
            subtitle="Choose from the world's most sought-after study destinations — each with unique opportunities and lifestyles."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <article
              key={dest.country}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={dest.image}
                  alt={`Study in ${dest.country}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

                {/* Flag */}
                <div className="absolute top-4 left-4 text-3xl">{dest.flag}</div>
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-xl mb-1">
                  Study in {dest.country}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {dest.tagline}
                </p>
                <a
                  href="#eligibility"
                  className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors"
                  aria-label={`Learn more about studying in ${dest.country}`}
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
