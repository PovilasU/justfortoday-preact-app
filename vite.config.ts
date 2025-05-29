import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vite.dev/config/
export default defineConfig({
  // base: "/dist/", // Uncomment this line if you want to serve from a subdirectory
  plugins: [preact()],
});
