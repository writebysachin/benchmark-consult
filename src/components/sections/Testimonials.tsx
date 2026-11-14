import { TESTIMONIALS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Quote, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-slate-50"
      aria-label="Student testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Real stories"
            title="Hear It Straight From"
            titleHighlight="Our Students"
            subtitle="Thousands of students have transformed their lives through our guidance. Here are a few of their stories."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col gap-5"
            >
              {/* Quote mark */}
              <Quote className="w-8 h-8 text-orange-200" aria-hidden="true" />

              <blockquote className="text-slate-600 text-sm leading-relaxed flex-1">
                {t.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.university}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust row */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          {[
            { label: "TRUSTED BY 800+ TOP UNIVERSITIES" },
            { label: "98% VISA SUCCESS RATE" },
            { label: "JOIN THOUSANDS OF SUCCESSFUL SCHOLARS" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-400 border border-slate-200 rounded-full px-5 py-2"
            >
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
