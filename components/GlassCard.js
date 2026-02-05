import { cn } from "../lib/utils";

export function GlassCard({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-white/80",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
      <div className="relative z-10 p-6">{children}</div>
    </div>
  );
}
