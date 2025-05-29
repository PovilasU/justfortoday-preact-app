import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  base: "/justfortoday-preact-app/", // Uncomment this line if you want to serve from a subdirectory
  plugins: [preact(), visualizer({ open: false })],

  // build: {
  //   sourcemap: false, // ⬅️ This disables source map generation
  // },
});
