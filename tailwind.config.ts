import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#171717",
          gold: "#B89655",
          "gold-light": "#C9AE77",
          "gold-dark": "#97773D",
          beige: "#E9E0D2",
          "beige-light": "#F4EFE8",
          "beige-dark": "#D5C9B5",
          offwhite: "#FCFBF8",
          charcoal: "#262626",
          muted: "#737373",
        },
      },
      fontFamily: {
        serif: [
          "Cinzel",
          "Playfair Display",
          "Georgia",
          "Cambria",
          "'Times New Roman'",
          "Times",
          "serif",
        ],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "sans-serif",
        ],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(23, 23, 23, 0.05), 0 10px 25px -5px rgba(23, 23, 23, 0.03)",
        card: "0 4px 20px -2px rgba(23, 23, 23, 0.06)",
        hover: "0 12px 30px -4px rgba(23, 23, 23, 0.12)",
        gold: "0 4px 20px -2px rgba(184, 150, 85, 0.25)",
      },
      letterSpacing: {
        widest: "0.2em",
        luxury: "0.15em",
      },
    },
  },
  plugins: [],
};
export default config;
