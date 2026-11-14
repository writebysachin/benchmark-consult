import { ArrowRight, CheckCircle, Trophy, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-white flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-orange-600">
                Global Education Partners
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
              #1 Choice to{" "}
              <span className="text-orange-500">Study Abroad</span>{" "}
              for Global Careers
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
              Unlock your potential with expert guidance. We bridge the gap
              between your ambition and the world&apos;s finest universities
              with personalised counseling.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#eligibility"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg shadow-orange-200"
              >
                Start Application <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#testimonials"
                className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-all"
              >
                Watch Story
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-100">
              {[
                { icon: <CheckCircle className="w-4 h-4 text-orange-500" />, text: "98% Visa Success Rate" },
                { icon: <Trophy className="w-4 h-4 text-orange-500" />, text: "Since 2012" },
                { icon: <Users className="w-4 h-4 text-orange-500" />, text: "10,000+ Students Placed" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  {item.icon} {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                alt="Students studying abroad"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🎓</div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Your dream university awaits</p>
                  <p className="text-xs text-slate-500">Australia · UK · Canada · USA</p>
                </div>
              </div>
            </div>

            {[
              { flag: "🇦🇺", label: "Australia", pos: "-top-4 -left-4" },
              { flag: "🇬🇧", label: "UK", pos: "-top-4 right-8" },
              { flag: "🇨🇦", label: "Canada", pos: "bottom-32 -left-6" },
              { flag: "🇺🇸", label: "USA", pos: "top-1/2 -right-4" },
            ].map((item) => (
              <div
                key={item.label}
                className={`absolute ${item.pos} bg-white shadow-lg rounded-2xl px-3 py-2 flex items-center gap-2 text-xs font-semibold text-slate-700 border border-slate-100`}
              >
                <span className="text-base">{item.flag}</span> {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
