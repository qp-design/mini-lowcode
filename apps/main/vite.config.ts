import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
import { name } from './package.json';
const lifecycle = process.env.npm_lifecycle_event

// https://vitejs.dev/config/
export default defineConfig({
  base: lifecycle === 'dev' ? '/' : `/paas/${name}/`,
  plugins: [
    // visualizer({
    //   open: true
    // }) as PluginOption,
    react(),
  ],
  optimizeDeps: {
    // exclude: lifecycle === 'dev' ? null : ['react', 'react-dom'],
  },
  define: {
    'process.env.REACT_APP_BASE_URL': `"http://b2bpc.269086bd8df14164abebc57fbadd5704.saas.qjclouds.com/"`,
    'process.env.REACT_APP_SESSION_VALUE_KEY': `"saas-token"`,
    'process.env.REACT_APP_SESSION_KEY': `"saas-token"`,
    'process.env.REACT_IMG_PATH': '"/paas/shop/"',
    'process.env.isHistory': '"/paas/b2b-cli-pc-lowcode/login"'
  },
  resolve: {
    alias: {
      '@': '/src'
    },
  },
  build: {
    outDir: name,
    minify: true,
  },
})
