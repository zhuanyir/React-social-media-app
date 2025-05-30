import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/React-social-media-app/', 
  plugins: [react({
    babel: {
      parserOpts: { strictMode: true }
    }
  })],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    jsx: 'automatic'  // 启用现代 JSX 转换
  },
  build: {
    outDir: 'dist'
  }
})
