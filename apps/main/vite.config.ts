import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
import { name } from './package.json';
import {config} from "./config/dev";
import {config as prodConfig} from "./config/prod";

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  return {
    base: command === 'serve' ? '/' : `/paas/${name}/`,
    plugins: [
      visualizer({
        open: true
      }) as PluginOption,
      react(),
    ],
    optimizeDeps: {
      // exclude: lifecycle === 'dev' ? null : ['react', 'react-dom'],
    },
    define: {
      'process.env.REACT_APP_BASE_URL': command === 'serve' ? config.API_ROOT : prodConfig.API_ROOT,
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
  }
})
