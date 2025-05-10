import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      // eslint-disable-next-line no-undef
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',

      /**
       * custom insert position
       * @default: body-last
       */
      inject: 'body-last' | 'body-first',

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: '__svg__icons__dom__',
    }),
  ],
  server: {
    open: true,
    port: 4200,
    hot: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/custom/custom-bootstrap.scss";',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
