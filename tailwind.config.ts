import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        'hero-bg': "url('/homeNoAuth/backgroundPresentationSection.png')",

        'hero-pattern':
          "linear-gradient(to bottom, rgba(139, 139, 139, 0.2), rgba(21, 21, 21, 0.9)), url('/homeNoAuth/backgroundPresentationSection.png')",
        
      },
      
      colors: {
        lightRed: "#ff0044",
  
        darkRed: "#b30d39",
  
        lightGray: "#ccc8c8",
  
        mediumGray: "#9e9a9a",
  
        darkGray: "#4e4e4e",
      },
    },

    
  },
  plugins: [],
};
export default config;
