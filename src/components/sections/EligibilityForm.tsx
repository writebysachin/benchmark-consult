"use client";

import { useState } from "react";
import { CheckCircle, Lock, Phone } from "lucide-react";

const DESTINATIONS_OPTIONS = ["Australia", "United Kingdom", "Canada", "USA", "New Zealand", "Ireland"];

export default function EligibilityForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    destination: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!/^\+?[\d\s\-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.destination) {
      newErrors.destination = "Please select a destination.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    // TODO: connect to API route / CRM
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section
      id="eligibility"
      className="py-20 bg-slate-900"
      aria-label="Free eligibility check form"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-orange-400 mb-4">
              Free Assessment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Check Your{" "}
              <span className="text-orange-500">Free Eligibility</span> Today
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Fill in the form and our expert counselors will get in touch
              within 24 hours with a personalised plan for your study abroad
              journey — completely free, no obligations.
            </p>

            {/* Features list */}
            <ul className="space-y-3">
              {[
                "Personalised university shortlist",
                "Scholarship eligibility analysis",
                "Visa requirement overview",
                "Expert counselor assigned to you",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-slate-400 text-sm flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-400" />
              Call us anytime:{" "}
              <a
                href="tel:+97714000000"
                className="text-orange-400 font-semibold hover:text-orange-300 transition-colors"
              >
                +977 1 4-XXXXXX
              </a>
            </p>
          </div>

          {/* Right form */}
          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-3xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-white text-xl font-bold mb-2">
                  Thank you, {formData.fullName.split(" ")[0]}!
                </h3>
                <p className="text-slate-400 text-sm">
                  Our counselor will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Eligibility check form"
              >
                <h3 className="text-white font-bold text-xl mb-6">
                  Get Your Free Assessment
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wide"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Aaryan Sharma"
                      autoComplete="name"
                      className={`w-full bg-slate-900/60 border ${
                        errors.fullName ? "border-red-500" : "border-slate-600"
                      } rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs mt-1" role="alert">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wide"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+977 98XXXXXXXX"
                      autoComplete="tel"
                      className={`w-full bg-slate-900/60 border ${
                        errors.phone ? "border-red-500" : "border-slate-600"
                      } rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1" role="alert">{errors.phone}</p>
                    )}
                  </div>

                  {/* Destination */}
                  <div>
                    <label
                      htmlFor="destination"
                      className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wide"
                    >
                      Select Destination
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className={`w-full bg-slate-900/60 border ${
                        errors.destination ? "border-red-500" : "border-slate-600"
                      } rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors appearance-none`}
                    >
                      <option value="" disabled className="text-slate-500">
                        Choose country
                      </option>
                      {DESTINATIONS_OPTIONS.map((d) => (
                        <option key={d} value={d} className="text-slate-900 bg-white">
                          {d}
                        </option>
                      ))}
                    </select>
                    {errors.destination && (
                      <p className="text-red-400 text-xs mt-1" role="alert">{errors.destination}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wide"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      autoComplete="email"
                      className={`w-full bg-slate-900/60 border ${
                        errors.email ? "border-red-500" : "border-slate-600"
                      } rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1" role="alert">{errors.email}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors duration-200 text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                >
                  Get Assessment Now →
                </button>

                <p className="text-xs text-slate-500 text-center mt-4 flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" /> Your information is secure and never shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
