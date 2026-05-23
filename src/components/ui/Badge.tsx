import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
  dotAnimate?: boolean;
}

export function Badge({ children, className, dot = false, dotAnimate = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-medium text-indigo-300",
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full bg-indigo-400",
            dotAnimate && "animate-pulse"
          )}
        />
      )}
      {children}
    </span>
  );
}
