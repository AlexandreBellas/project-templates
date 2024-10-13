import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components")
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "./src/pages")
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "./src/assets")
      },
      {
        find: "@hooks",
        replacement: path.resolve(__dirname, "./src/hooks")
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "./src/utils")
      },
      {
        find: "@services",
        replacement: path.resolve(__dirname, "./src/services")
      },
      {
        find: "@contexts",
        replacement: path.resolve(__dirname, "./src/contexts")
      }
    ]
  }
})