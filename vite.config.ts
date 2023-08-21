import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";
const __dirname = new URL(".", import.meta.url).pathname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "src", replacement: path.resolve(__dirname, "src") }],
  },
});
