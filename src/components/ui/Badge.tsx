interface BadgeProps {
  label: string;
  variant?: "orange" | "dark" | "light";
  className?: string;
}

const variantStyles = {
  orange: "bg-orange-100 text-orange-600 border border-orange-200",
  dark: "bg-slate-800 text-orange-400 border border-slate-700",
  light: "bg-white text-orange-500 border border-orange-300",
};

export function Badge({ label, variant = "orange", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full ${variantStyles[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
