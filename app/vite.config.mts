import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [reactRouter(), tsconfigPaths()],
  server: {
    port: 5173,
    fs: {
      allow: ["../.."],
    },
  },
});
