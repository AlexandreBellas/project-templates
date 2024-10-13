import type { Config } from "tailwindcss"
import capsize from "tailwindcss-capsize"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
    }
  },
  plugins: [
    capsize({ className: "leading-trim" })
  ]
}
export default config