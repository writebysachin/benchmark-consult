import { STATS } from "@/lib/data";

export default function Stats() {
  return (
    <section
      className="bg-white border-y border-slate-100 py-12"
      aria-label="Key statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-1"
            >
              <span className="text-3xl md:text-4xl font-extrabold text-orange-500">
                {stat.value}
              </span>
              <span className="text-sm text-slate-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
