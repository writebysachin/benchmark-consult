import { ArrowRight } from "lucide-react";

const DESTINATIONS = [
  {
    country: "Australia",
    tagline: "Top-tier universities and a vibrant lifestyle.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    flag: "🇦🇺",
  },
  {
    country: "United Kingdom",
    tagline: "Centuries of academic excellence and heritage.",
    image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80",
    flag: "🇬🇧",
  },
  {
    country: "Canada",
    tagline: "Welcoming culture and post-study opportunities.",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
    flag: "🇨🇦",
  },
  {
    country: "USA",
    tagline: "Innovation hub and diverse educational landscape.",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
    flag: "🇺🇸",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-orange-500 block mb-3">Where will you go?</span>
          <h2 className="text-4xl font-bold text-slate-900">
            Popular Study <span className="text-orange-500">Destinations</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Choose from the world&apos;s most sought-after study destinations — each with unique opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <article key={dest.country} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={dest.image}
                  alt={`Study in ${dest.country}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute top-4 left-4 text-3xl">{dest.flag}</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-xl mb-1">Study in {dest.country}</h3>
                <p className="text-slate-300 text-sm mb-4">{dest.tagline}</p>
                <a href="#eligibility" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">
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
