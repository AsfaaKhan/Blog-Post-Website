import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['class', "class"],
  theme: {
  	extend: {
  		screens: {
  			xs: '479px',
  			sm: '639px',
  			md: '767px',
  			lg: '1023px',
  			xl: '1280px',
  			'2xl': '1535px'
  		},
  		
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
