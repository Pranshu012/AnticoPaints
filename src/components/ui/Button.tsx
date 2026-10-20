import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold" | "outline" | "ghost" | "beige";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans tracking-wide text-xs uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3.5 text-xs font-medium tracking-luxury",
    lg: "px-8 py-4 text-sm font-medium tracking-luxury",
  };

  const variantStyles = {
    primary:
      "bg-brand-black text-brand-offwhite border border-brand-black hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black shadow-subtle",
    gold:
      "bg-brand-gold text-brand-black border border-brand-gold hover:bg-brand-gold-dark hover:border-brand-gold-dark hover:text-brand-offwhite shadow-gold",
    outline:
      "bg-transparent text-brand-black border border-brand-black/30 hover:border-brand-gold hover:text-brand-gold",
    beige:
      "bg-brand-beige text-brand-black border border-brand-beige-dark hover:bg-brand-offwhite hover:border-brand-gold",
    ghost:
      "bg-transparent text-brand-black hover:text-brand-gold hover:bg-brand-beige/20",
  };

  const combinedClasses = twMerge(
    clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
