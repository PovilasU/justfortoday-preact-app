import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { visualizer } from "rollup-plugin-visualizer";
//import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  base: "/justfortoday-preact-app/", // Uncomment this line if you want to serve from a subdirectory
  plugins: [
    preact(),
    // viteCompression(),
    visualizer({ open: false }),
  ],
  build: {
    minify: "terser", // 👈 tell Vite to use Terser instead of esbuild
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"], // remove console.log calls
        passes: 2, // more passes for better optimization
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
