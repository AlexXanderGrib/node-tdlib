import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import packageJson from "./package.json";
import { builtinModules } from "module";
import replace from "@rollup/plugin-replace";

const external = [
  Object.keys(packageJson.devDependencies),
  Object.keys(packageJson.optionalDependencies),
  ...Object.keys(packageJson.dependencies),
  ...builtinModules
];

export default defineConfig({
  appType: "custom",

  build: {
    target: ["node16"],
    minify: false,

    rollupOptions: {
      external,

      output: [
        {
          format: "cjs",
          plugins: [
            replace({
              "compilerMagic$(getCurrentFile())": "/* compilerMagic$(getCurrentFile()) */ __filename",
              delimiters: ["", ""]
            })
          ],
          preserveModules: true,
          exports: "named"
        },
        {
          format: "esm",
          entryFileNames: "[name].mjs",

          plugins: [
            replace({
              "compilerMagic$(getCurrentFile())": "/* compilerMagic$(getCurrentFile()) */ fileURLToPath(import.meta.url)",
              delimiters: ["", ""]
            })
          ],
          preserveModules: true
        }
      ]
    },

    lib: {
      name: "tdlib-native",
      entry: {
        index: "./src/index.ts",
        markup: "./src/markup.ts",
        types: "./src/types.ts",
        addon: "./src/addon.ts"
      }
    }
  },

  plugins: [dts({ exclude: ["./src/__tests__"], tsconfigPath: "./tsconfig.json" })]
});
