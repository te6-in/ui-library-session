import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export const tailwindPreset: Config = {
  theme: {
    extend: {
      minHeight: {
        // @ts-expect-error this can be an array
        screen: ["100vh", "100dvh"],
      },
      height: {
        // @ts-expect-error this can be an array
        screen: ["100vh", "100dvh"],
      },
      fontFamily: {
        sans: ["Ubuntu\\ Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
