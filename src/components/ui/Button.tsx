"use client";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-indigo-500 hover:bg-indigo-400 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 active:scale-[0.98]",
        secondary:
          "bg-transparent border border-white/10 text-zinc-200 hover:border-white/20 hover:bg-white/5 active:scale-[0.98]",
        ghost:
          "bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-white/5",
        outline:
          "border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-500/60",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-9 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button, buttonVariants };
