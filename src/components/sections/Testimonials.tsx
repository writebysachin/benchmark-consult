import { Quote, ShieldCheck } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Benchmark helped me secure a 50% scholarship! Their meticulous visa preparation made the entire process stress-free and smooth.",
    name: "Aaryan Sharma",
    university: "University of Melbourne, Australia",
    avatar: "AS",
  },
  {
    quote: "From choosing the right course to my pre-departure briefing, the team at Benchmark were mentors rather than just consultants.",
    name: "Sita Gurung",
    university: "King's College London, UK",
    avatar: "SG",
  },
  {
    quote: "The transparency in their process is what sets them apart. I always felt in control of my application with their expert advice.",
    name: "Rohan Thapa",
    university: "University of Toronto, Canada",
    avatar: "RT",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-orange-500 block mb-3">Real stories</span>
          <h2 className="text-4xl font-bold text-slate-900">
            Hear It Straight From <span className="text-orange-500">Our Students</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col gap-5">
              <Quote className="w-8 h-8 text-orange-200" />
              <blockquote className="text-slate-600 text-sm leading-relaxed flex-1">{t.quote}</blockquote>
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

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {["TRUSTED BY 800+ TOP UNIVERSITIES", "98% VISA SUCCESS RATE", "THOUSANDS OF SUCCESSFUL SCHOLARS"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-400 border border-slate-200 rounded-full px-5 py-2">
              <ShieldCheck className="w-4 h-4 text-orange-400" /> {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
