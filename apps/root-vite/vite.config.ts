import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'
import { visualizer } from 'rollup-plugin-visualizer';

const lifecycle = process.env.npm_lifecycle_event

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    visualizer({
      open: true
    }) as PluginOption,
    react(),
    importToCDN({
      modules: [
        {
          name: 'antd',
          var: 'Antd',
          path: 'https://cdn.staticfile.org/antd/5.9.0/antd.min.js',
        },
        {
          name: 'react',
          var: 'React',
          path: 'https://cdn.staticfile.org/react/18.2.0/umd/react.production.min.js',
        },
        {
          name: 'react-dom',
          var: 'ReactDOM',
          path: 'https://cdn.staticfile.org/react-dom/18.2.0/umd/react-dom.production.min.js',
        },
      ],
    })
  ],
  optimizeDeps: {
    exclude: lifecycle === 'dev' ? null : ['react', 'react-dom'],
  },
  define: {
    'process.env.REACT_APP_BASE_URL': `"https://b2bopte59063d8bf45406b8e0b088d3a9b1633.saas.qjclouds.com/"`,
    'process.env.REACT_APP_SESSION_VALUE_KEY': `"saas-token"`,
    'process.env.REACT_APP_SESSION_KEY': `"saas-token"`,
  },
  resolve: {
    alias: {
      '@': '/src'
    },
  },
  build: {
    minify: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'antd'],
    }
  },
})
