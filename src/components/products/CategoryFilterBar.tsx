"use client";

import React from "react";
import { ProductItem } from "@/types";

export interface CategoryOption {
  id: string;
  name: string;
  categoryMatch?: string; // undefined means all
}

interface CategoryFilterBarProps {
  categories: CategoryOption[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
  products: ProductItem[];
}

export function CategoryFilterBar({
  categories,
  activeCategoryId,
  onSelectCategory,
  products,
}: CategoryFilterBarProps) {
  const getProductCount = (categoryMatch?: string) => {
    if (!categoryMatch) return products.length;
    return products.filter((p) => p.category === categoryMatch).length;
  };

  return (
    <nav
      aria-label="Product categories"
      className="w-full border-b border-brand-beige/85 bg-brand-offwhite/95 backdrop-blur-sm sticky top-20 z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isSelected = activeCategoryId === cat.id;
            const count = getProductCount(cat.categoryMatch);

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`min-h-[44px] px-4 py-2.5 rounded-sm text-xs font-sans tracking-wide whitespace-nowrap transition-all duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                  isSelected
                    ? "bg-brand-black text-brand-offwhite font-medium shadow-sm border border-brand-black"
                    : "bg-brand-offwhite text-brand-black/80 border border-brand-beige hover:border-brand-gold hover:text-brand-black hover:bg-brand-beige/20"
                }`}
                aria-pressed={isSelected}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm ${
                    isSelected
                      ? "bg-brand-charcoal text-brand-gold font-semibold"
                      : "bg-brand-beige/40 text-brand-muted"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
