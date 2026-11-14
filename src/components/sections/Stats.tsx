const STATS = [
  { value: "10K+", label: "Global Students" },
  { value: "1,200+", label: "Scholarships Won" },
  { value: "800+", label: "Partner Universities" },
  { value: "98%", label: "Visa Success Rate" },
];

export default function Stats() {
  return (
    <section className="bg-white border-y border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="text-4xl font-extrabold text-orange-500">{stat.value}</span>
              <span className="text-sm text-slate-500 font-medium mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
