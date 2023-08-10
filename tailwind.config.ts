import COLORS from "./src/constants/COLORS";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: COLORS.primary,
        primaryHalf: COLORS.primaryHalf,
      },
    },
  },
  plugins: [],
};
export default config;
