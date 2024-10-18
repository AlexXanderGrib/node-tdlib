import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import packageJson from "./package.json";
import { builtinModules } from "module";

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
      output: {
        preserveModules: true,
        exports: "named"
      }
    },

    lib: {
      name: "tdlib-native",
      formats: ["cjs", "es"],
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
