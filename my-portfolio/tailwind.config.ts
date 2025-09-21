import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all React files inside src
  ],
  theme: {},
  plugins: [],
};

export default config;
