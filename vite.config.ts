import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const $imports = AutoImport({
    dts: "./src/types/imports.d.ts",
    imports: [
      "react",
      { effector: ["createEvent", "createStore", "sample", "combine"] },
      { "effector-react": ["useUnit"] },
      { clsx: ["clsx"] },
    ],
  });
  return {
    plugins: [react(), $imports],
    css: { postcss: { plugins: [tailwind(), autoprefixer()] } },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      minify: "esbuild",
      target: "esnext",
      sourcemap: false,
      cssCodeSplit: true,
      envPrefix: "APP_",
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
  };
});
