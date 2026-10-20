import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "dark" | "beige" | "outline";
  className?: string;
}

export function Badge({ children, variant = "outline", className }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-2.5 py-1 text-[10px] uppercase font-sans font-medium tracking-widest";

  const variantStyles = {
    gold: "bg-brand-gold/15 text-brand-gold-dark border border-brand-gold/30",
    dark: "bg-brand-black text-brand-beige border border-brand-charcoal",
    beige: "bg-brand-beige text-brand-black border border-brand-beige-dark",
    outline: "bg-transparent text-brand-muted border border-brand-beige-dark",
  };

  return (
    <span className={twMerge(clsx(baseStyles, variantStyles[variant], className))}>
      {children}
    </span>
  );
}
