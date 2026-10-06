import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  return {
    server: {
      proxy: {
        '/api': env.VITE_API_TARGET || 'http://localhost:3001',
      },
    },
  }
})
