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
          black: "#111111",
          charcoal: "#222222",
          gold: "#C08000",
          "gold-light": "#D8991B",
          "gold-dark": "#9A6500",
          beige: "#E9E0D2",
          "beige-light": "#F5EFE6",
          "beige-dark": "#D5C9B5",
          offwhite: "#FCFBF8",
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
        subtle: "0 1px 3px rgba(17, 17, 17, 0.05), 0 10px 25px -5px rgba(17, 17, 17, 0.03)",
        card: "0 4px 20px -2px rgba(17, 17, 17, 0.06)",
        hover: "0 12px 30px -4px rgba(17, 17, 17, 0.12)",
        gold: "0 4px 20px -2px rgba(192, 128, 0, 0.28)",
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
