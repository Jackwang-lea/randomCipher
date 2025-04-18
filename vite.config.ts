import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.tsx$/], // Enable TSX
    }),
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
      ],
    }),
  ],
})
