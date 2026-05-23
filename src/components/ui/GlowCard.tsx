"use client";
import { cn } from "@/lib/utils";
import { useRef, useState, type MouseEvent } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({ children, className, glowColor = "rgba(99,102,241,0.15)" }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradientPos({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/7 bg-[#111114] transition-all duration-300",
        isHovered && "border-white/14",
        className
      )}
      style={
        isHovered
          ? {
              boxShadow: `0 0 40px ${glowColor}`,
            }
          : undefined
      }
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(200px circle at ${gradientPos.x}% ${gradientPos.y}%, ${glowColor}, transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
