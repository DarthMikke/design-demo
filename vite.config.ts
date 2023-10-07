import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // demoApp: resolve(__dirname, 'index.html')
        demoApp: 'index.html',
        bundled: 'src/bundle.scss',
      },
      output: {
        dir: "public",
        assetFileNames: "assets/[name].[ext]",
      }
    }
  }
})
