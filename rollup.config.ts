import { dts } from "rollup-plugin-dts";

import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import type { RollupOptions } from "rollup";

const sourceOptions: RollupOptions = {
  input: "src/index.ts",
  output: { dir: "dist" },
  external: [
    "lucide-react",
    "react",
    "react/jsx-runtime",
    "tailwindcss/defaultTheme",
  ],
  plugins: [
    typescript({
      tsconfig: "./src/tsconfig.json",
    }),
    babel({
      babelHelpers: "bundled",
      presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }],
        "@babel/preset-typescript",
      ],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    terser(),
  ],
};

const typeOptions: RollupOptions = {
  input: "dist/types/index.d.ts",
  output: {
    file: "dist/index.d.ts",
  },
  plugins: [
    dts({
      tsconfig: "./src/tsconfig.json",
    }),
  ],
};

const rollupConfig = [sourceOptions, typeOptions];

export default rollupConfig;
