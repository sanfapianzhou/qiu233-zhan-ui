import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";


export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "examples/packages/installComponents.js"),
      name: "qiu233-zhan-ui",
      fileName: (format) => `qiu233-zhan-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["vue","echarts"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
