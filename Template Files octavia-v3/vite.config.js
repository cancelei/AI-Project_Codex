import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
  ],
  define: { "process.env": {} },
  server: {
    // open: true,
  },

  resolve: {
    alias: [
      {
        find: "@",
        replacement: `${path.resolve(__dirname, "./src")}/`,
      },
    ],
  },
  css: {
    preprocessorOptions: {
      // scss: { additionalData: `@import "src/assets/styles/main";` },
    },
  },
  /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
});
