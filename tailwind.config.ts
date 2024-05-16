import { tailwindPreset } from "./src/libs/tailwind-preset";
import { type Config } from "tailwindcss";
import { neutral, orange } from "tailwindcss/colors";

const config: Config = {
  content: ["./src/**/*.tsx", "./index.html"],
  darkMode: "class",
  presets: [tailwindPreset],
  theme: {
    extend: {
      colors: {
        base: neutral,
        "base-dark": neutral,
        primary: orange,
        accent: orange,
      },
    },
  },
};

export default config;
