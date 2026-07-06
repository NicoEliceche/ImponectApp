import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const normalizeBasePath = (value = '/') => {
  if (!value || value === '/') return '/'
  return `/${value.replace(/^\/+|\/+$/g, '')}/`
}

const spaFallbackPlugin = () => {
  let outDir = 'dist'

  return {
    name: 'spa-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      const indexPath = resolve(outDir, 'index.html')
      const fallbackPath = resolve(outDir, '404.html')

      if (existsSync(indexPath)) {
        copyFileSync(indexPath, fallbackPath)
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: normalizeBasePath(process.env.VITE_BASE_PATH),
  plugins: [
    react(),
    spaFallbackPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Imponect App',
        short_name: 'Imponect',
        description: 'Gestión integral de negocio',
        theme_color: '#00334d',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
})
