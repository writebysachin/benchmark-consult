import { NAV_LINKS, CONTACT } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { MapPin, Mail, Phone } from "lucide-react";

const FOOTER_LINKS = {
  "Quick Links": NAV_LINKS,
  Support: [
    { label: "How It Works", href: "#process" },
    { label: "Scholarships", href: "#services" },
    { label: "Visa Guidance", href: "#services" },
    { label: "FAQs", href: "#" },
  ],
};

const SOCIAL = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">BG</span>
              </div>
              <span className="text-white font-bold text-xl">
                Benchmark <span className="text-orange-500">Global</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Empowering students with life-changing global educational
              opportunities since 2012. Your trusted partner in international
              education.
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Stay Updated
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 bg-slate-800 border border-slate-700 rounded-full px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {heading}
              </h3>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-orange-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-3 text-sm text-slate-400">
              <p className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span>{CONTACT.address}</span>
              </p>
              <p className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-orange-400 transition-colors"
                >
                  {CONTACT.email}
                </a>
              </p>
              <p className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="hover:text-orange-400 transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </p>
            </address>

            <div className="flex gap-3 mt-6">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Benchmark Global Consultants. Kathmandu, Nepal.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
