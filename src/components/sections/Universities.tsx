import { UNIVERSITIES } from "@/lib/data";

export default function Universities() {
  return (
    <section
      className="py-14 bg-slate-50 border-y border-slate-100"
      aria-label="Partner universities"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
          Select from the World&apos;s Top Universities
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {UNIVERSITIES.map((name) => (
            <div
              key={name}
              className="bg-white border border-slate-200 rounded-xl px-5 py-3 text-sm font-medium text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-all duration-200 shadow-sm"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
