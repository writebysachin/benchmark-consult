import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Target, GraduationCap, Plane, BadgeDollarSign, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: <Target className="w-6 h-6 text-orange-500" />,
    title: "Career Counseling",
    description:
      "Personalised one-on-one sessions to map your strengths, interests, and career goals to the right course and destination.",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-orange-500" />,
    title: "Admission Guidance",
    description:
      "End-to-end support from shortlisting universities to preparing a compelling application that stands out.",
  },
  {
    icon: <Plane className="w-6 h-6 text-orange-500" />,
    title: "Visa Assistance",
    description:
      "Expert document preparation, mock interviews, and real-time embassy updates for a 98% visa success rate.",
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6 text-orange-500" />,
    title: "Scholarship Support",
    description:
      "We identify and secure over 1,200 scholarships annually — reducing your financial burden significantly.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-white"
      aria-label="Our services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow="What we offer"
            title="Our Premium"
            titleHighlight="Services"
            subtitle="From the first counseling session to your first day on campus — we are with you every step of the way."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-orange-50 group-hover:bg-orange-100 rounded-2xl flex items-center justify-center mb-5 transition-colors">
                {service.icon}
              </div>

              <h3 className="font-bold text-slate-900 text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              <a
                href="#eligibility"
                className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 text-sm font-semibold transition-colors"
                aria-label={`Learn more about ${service.title}`}
              >
                Explore <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="#eligibility" size="lg">
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
