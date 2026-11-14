import { BLOGS } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Clock, Calendar, ArrowRight } from "lucide-react";

export default function BlogPreview() {
  return (
    <section
      id="blogs"
      className="py-20 bg-white"
      aria-label="Latest blog articles"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <SectionHeader
            eyebrow="Resources"
            title="Latest"
            titleHighlight="Articles & Guides"
            align="left"
          />
          <a
            href="#"
            className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors whitespace-nowrap"
          >
            View all articles →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOGS.map((blog) => (
            <article
              key={blog.slug}
              className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <Badge label={blog.category} variant="light" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {blog.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {blog.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base leading-snug mb-3 group-hover:text-orange-500 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                  {blog.excerpt}
                </p>

                <a
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 text-sm font-semibold transition-colors"
                  aria-label={`Read more: ${blog.title}`}
                >
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
