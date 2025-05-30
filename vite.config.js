import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/React-social-media-app/', 
  server: {
    open: '/React-social-media-app/#/', // 自动打开带hash的路径
    strictPort: true
  },
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
