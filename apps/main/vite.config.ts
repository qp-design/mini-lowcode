import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
import { name } from './package.json';
import {config} from "./config/dev";
import {config as prodConfig} from "./config/prod";
import cdn from "vite-plugin-cdn-import";
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  return {
    base: command === 'serve' ? '/' : `/paas/${name}/`,
    plugins: [
      visualizer({
        open: true
      }) as PluginOption,
      react(),
      cdn({
        modules: [
          {
            name: "lodash",
            var: "_",
            path: "https://brushes.oss-cn-shanghai.aliyuncs.com/js/lodash.min.js",
          },
          {
            name: "react",
            var: "React",
            path: "https://brushes.oss-cn-shanghai.aliyuncs.com/js/react.production.min.js",
          },
          {
            name: "react-dom",
            var: "ReactDOM",
            alias: ["react-dom/client"],
            path: "https://brushes.oss-cn-shanghai.aliyuncs.com/js/react-dom.production.min.js",
          },
          {
            name: "dayjs",
            var: "dayjs",
            path: "https://brushes.oss-cn-shanghai.aliyuncs.com/js/dayjs.min.js",
          },
          {
            name: "antd",
            var: "antd",
            path: "https://brushes.oss-cn-shanghai.aliyuncs.com/js/antd.min.js",
          }
        ]
      }),
      chunkSplitPlugin({
        strategy: 'default',
        customSplitting: {
          'codemirror': ['@codemirror/state', '@codemirror/view', '@codemirror/language'],
          'codemirror-lang': [/@codemirror\/lang-.*/],
          '@antv/g2': ['@antv/g2'],
          'antv7': [/@antv\/l7*/],
          // '@antv/g2': ['@antv/g2'],
          // '@antv/l7plot': ['@antv/l7plot'],
          // '@antv/l7': ['@antv/l7']
        }
      }),
      viteCompression({
        algorithm: 'gzip',
        threshold: 10240 // 对大于 10KB 的文件进行压缩
      })
    ],
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
      rollupOptions: {
        external: ['antd', 'react', 'react-dom', 'dayjs', 'lodash'],
      }
    },
  }
})
