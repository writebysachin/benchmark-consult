import { Button } from "@/components/ui/Button";
import { MessageCircle, Map, FileText, PlaneTakeoff, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: <MessageCircle className="w-7 h-7 text-orange-500" />,
    title: "Free Consultation",
    description:
      "Book a free session with our expert counselor to discuss your goals, background, and options.",
  },
  {
    icon: <Map className="w-7 h-7 text-orange-500" />,
    title: "Personalised Plan",
    description:
      "We create a tailored roadmap — right universities, scholarships, timelines, and visa pathways.",
  },
  {
    icon: <FileText className="w-7 h-7 text-orange-500" />,
    title: "Application Support",
    description:
      "We handle your SOPs, recommendations, and university applications from start to finish.",
  },
  {
    icon: <PlaneTakeoff className="w-7 h-7 text-orange-500" />,
    title: "Visa & Departure",
    description:
      "Expert visa preparation, mock interviews, pre-departure briefing, and ongoing support.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-20 bg-white"
      aria-label="How it works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-3 block">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            How It <span className="text-orange-500">Works</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Getting started is easy. Our streamlined 4-step process takes you
            from first enquiry to campus arrival.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-orange-100"
            aria-hidden="true"
          />

          {STEPS.map((item, idx) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center text-center gap-4"
            >
              {/* Icon circle */}
              <div className="relative z-10 w-20 h-20 bg-orange-50 border-2 border-orange-200 rounded-full flex items-center justify-center">
                {item.icon}
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {idx + 1}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href="#eligibility" size="lg">
            Start Your Journey Today <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
