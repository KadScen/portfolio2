import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: { "process.env": {} },
  define: { "process.env": process.env },
  build: {
    outDir: "public", // Specify your desired output folder name
  },
});
