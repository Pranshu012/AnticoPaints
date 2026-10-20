import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCard {
  id: string;
  name: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    id: "texture-finishes",
    name: "Texture & Finishes",
    description: "Explore decorative wall textures.",
    href: "/products?category=texture-finishes",
    imageSrc: "/images/products/texture-wall.svg",
    imageAlt: "Antico decorative wall texture finish",
  },
  {
    id: "primers",
    name: "Primers",
    description: "Prepare walls before painting.",
    href: "/products?category=primers",
    imageSrc: "/images/products/cement-wall-primer.svg",
    imageAlt: "Antico cement wall primer application",
  },
  {
    id: "emulsions",
    name: "Emulsions",
    description: "Explore our wall-paint range.",
    href: "/products?category=emulsions",
    imageSrc: "/images/products/luxury-emulsion.svg",
    imageAlt: "Antico smooth interior luxury emulsion",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Find painting preparation essentials.",
    href: "/products?category=accessories",
    imageSrc: "/images/products/masking-tape.svg",
    imageAlt: "Antico professional masking tape and accessories",
  },
];

export function SimpleCategoryGrid() {
  return (
    <section className="bg-brand-offwhite py-14 sm:py-20 border-b border-brand-beige/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block mb-2">
            PRODUCT CATEGORIES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black tracking-tight">
            Find what your project needs.
          </h2>
          <p className="text-sm sm:text-base text-brand-black/70 font-sans mt-2.5 leading-relaxed">
            Explore our product range by category and find the products suited to your painting requirements.
          </p>
        </div>

        {/* Categories Grid: 1 col on small mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group block bg-white border border-brand-beige hover:border-brand-gold/60 transition-all duration-200 overflow-hidden shadow-xs hover:shadow-card"
            >
              {/* Category Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-beige/20 border-b border-brand-beige/60">
                <Image
                  src={cat.imageSrc}
                  alt={cat.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Category Details */}
              <div className="p-5 flex flex-col justify-between min-h-[130px]">
                <div>
                  <h3 className="font-serif text-lg font-medium text-brand-black group-hover:text-brand-gold transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted font-sans mt-1.5 leading-snug">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-1.5 text-xs font-sans font-medium text-brand-black group-hover:text-brand-gold transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Section Footer Action */}
        <div className="mt-12 text-center">
          <Link
            href="/products/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-black text-brand-offwhite hover:bg-brand-gold hover:text-brand-black transition-colors text-sm font-sans font-medium tracking-wide"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
