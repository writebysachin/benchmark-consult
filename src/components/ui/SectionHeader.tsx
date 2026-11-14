interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const textColor = dark ? "text-white" : "text-slate-900";
  const subtitleColor = dark ? "text-slate-300" : "text-slate-500";

  return (
    <div className={`flex flex-col gap-3 ${alignClass} max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow && (
        <span className="text-xs font-bold tracking-widest uppercase text-orange-500">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${textColor}`}>
        {title}{" "}
        {titleHighlight && (
          <span className="text-orange-500">{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
