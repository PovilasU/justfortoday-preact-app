import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { visualizer } from "rollup-plugin-visualizer";
//import purgecss from "vite-plugin-purgecss";

// https://vite.dev/config/
export default defineConfig({
  base: "/justfortoday-preact-app/", // Uncomment this line if you want to serve from a subdirectory
  plugins: [preact(), visualizer({ open: false })],
  build: {
    minify: "terser", // 👈 tell Vite to use Terser instead of esbuild
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false, // remove comments
      },
    },
  },

  // build: {
  //   sourcemap: false, // ⬅️ This disables source map generation
  // },
});
