// vite.config.ts
import { defineConfig } from "file:///Users/qin/Desktop/react-lowcode/web-lowcode/node_modules/vite/dist/node/index.js";
import react from "file:///Users/qin/Desktop/react-lowcode/web-lowcode/node_modules/@vitejs/plugin-react/dist/index.js";
import { visualizer } from "file:///Users/qin/Desktop/react-lowcode/web-lowcode/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";

// package.json
var name = "b2b-lowcode-editor";

// config/dev.ts
var config = {
  API_ROOT: '"https://b2bpcs2b5e345b62e77842efbf24394e014b7544.saas.qjclouds.com/"'
};

// config/prod.ts
var config2 = {
  API_ROOT: '`${location.protocol || "http"}//${location.host}`'
  // 配置服务器地址,
};

// vite.config.ts
import cdn from "file:///Users/qin/Desktop/react-lowcode/web-lowcode/node_modules/vite-plugin-cdn-import/dist/index.js";
import { chunkSplitPlugin } from "file:///Users/qin/Desktop/react-lowcode/web-lowcode/node_modules/vite-plugin-chunk-split/dist/index.mjs";
import viteCompression from "file:///Users/qin/Desktop/react-lowcode/web-lowcode/node_modules/vite-plugin-compression/dist/index.mjs";
var vite_config_default = defineConfig(({ command }) => {
  return {
    base: command === "serve" ? "/" : `/paas/${name}/`,
    plugins: [
      visualizer({
        open: true
      }),
      react(),
      cdn({
        modules: [
          {
            name: "lodash",
            var: "_",
            path: "https://brushes.oss-cn-shanghai.aliyuncs.com/js/lodash.min.js"
          },
          {
            name: "react",
            var: "React",
            path: "https://brushes.oss-cn-shanghai.aliyuncs.com/js/react.production.min.js"
          },
          {
            name: "react-dom",
            var: "ReactDOM",
            alias: ["react-dom/client"],
            path: "https://brushes.oss-cn-shanghai.aliyuncs.com/js/react-dom.production.min.js"
          },
          {
            name: "dayjs",
            var: "dayjs",
            path: "https://brushes.oss-cn-shanghai.aliyuncs.com/js/dayjs.min.js"
          },
          {
            name: "antd",
            var: "antd",
            path: "https://brushes.oss-cn-shanghai.aliyuncs.com/js/antd.min.js"
          }
        ]
      }),
      chunkSplitPlugin({
        strategy: "default",
        customSplitting: {
          "codemirror": ["@codemirror/state", "@codemirror/view", "@codemirror/language"],
          "codemirror-lang": [/@codemirror\/lang-.*/],
          "@antv/g2": ["@antv/g2"],
          "antv7": [/@antv\/l7*/]
          // 'antv': ['@antv/l7plot', '@antv/l7', '@antv/g2'],
          // '@antv/l7': ['@antv/l7'],
          // '@antv/g2': ['@antv/g2'],
        }
      }),
      viteCompression({
        algorithm: "gzip",
        threshold: 10240
        // 对大于 10KB 的文件进行压缩
      })
    ],
    define: {
      "process.env.REACT_APP_BASE_URL": command === "serve" ? config.API_ROOT : config2.API_ROOT,
      "process.env.REACT_APP_SESSION_VALUE_KEY": `"saas-token"`,
      "process.env.REACT_APP_SESSION_KEY": `"saas-token"`,
      "process.env.REACT_IMG_PATH": '"/paas/shop/"'
    },
    resolve: {
      alias: {
        "@": "/src"
      }
    },
    build: {
      outDir: name,
      minify: true,
      rollupOptions: {
        external: ["antd", "react", "react-dom", "dayjs", "lodash"]
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIiwgImNvbmZpZy9kZXYudHMiLCAiY29uZmlnL3Byb2QudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcWluL0Rlc2t0b3AvcmVhY3QtbG93Y29kZS93ZWItbG93Y29kZS9hcHBzL2VkaXRvclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3Fpbi9EZXNrdG9wL3JlYWN0LWxvd2NvZGUvd2ViLWxvd2NvZGUvYXBwcy9lZGl0b3Ivdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3Fpbi9EZXNrdG9wL3JlYWN0LWxvd2NvZGUvd2ViLWxvd2NvZGUvYXBwcy9lZGl0b3Ivdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIHR5cGUgUGx1Z2luT3B0aW9uIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInO1xuaW1wb3J0IHsgbmFtZSB9IGZyb20gJy4vcGFja2FnZS5qc29uJztcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi9jb25maWcvZGV2XCI7XG5pbXBvcnQge2NvbmZpZyBhcyBwcm9kQ29uZmlnfSBmcm9tIFwiLi9jb25maWcvcHJvZFwiO1xuaW1wb3J0IGNkbiBmcm9tIFwidml0ZS1wbHVnaW4tY2RuLWltcG9ydFwiO1xuaW1wb3J0IHsgY2h1bmtTcGxpdFBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWNodW5rLXNwbGl0J1xuaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbidcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoe2NvbW1hbmR9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgYmFzZTogY29tbWFuZCA9PT0gJ3NlcnZlJyA/ICcvJyA6IGAvcGFhcy8ke25hbWV9L2AsXG4gICAgcGx1Z2luczogW1xuICAgICAgdmlzdWFsaXplcih7XG4gICAgICAgIG9wZW46IHRydWVcbiAgICAgIH0pIGFzIFBsdWdpbk9wdGlvbixcbiAgICAgIHJlYWN0KCksXG4gICAgICBjZG4oe1xuICAgICAgICBtb2R1bGVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJsb2Rhc2hcIixcbiAgICAgICAgICAgIHZhcjogXCJfXCIsXG4gICAgICAgICAgICBwYXRoOiBcImh0dHBzOi8vYnJ1c2hlcy5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL2pzL2xvZGFzaC5taW4uanNcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwicmVhY3RcIixcbiAgICAgICAgICAgIHZhcjogXCJSZWFjdFwiLFxuICAgICAgICAgICAgcGF0aDogXCJodHRwczovL2JydXNoZXMub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS9qcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJyZWFjdC1kb21cIixcbiAgICAgICAgICAgIHZhcjogXCJSZWFjdERPTVwiLFxuICAgICAgICAgICAgYWxpYXM6IFtcInJlYWN0LWRvbS9jbGllbnRcIl0sXG4gICAgICAgICAgICBwYXRoOiBcImh0dHBzOi8vYnJ1c2hlcy5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJkYXlqc1wiLFxuICAgICAgICAgICAgdmFyOiBcImRheWpzXCIsXG4gICAgICAgICAgICBwYXRoOiBcImh0dHBzOi8vYnJ1c2hlcy5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL2pzL2RheWpzLm1pbi5qc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJhbnRkXCIsXG4gICAgICAgICAgICB2YXI6IFwiYW50ZFwiLFxuICAgICAgICAgICAgcGF0aDogXCJodHRwczovL2JydXNoZXMub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS9qcy9hbnRkLm1pbi5qc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIH0pLFxuICAgICAgY2h1bmtTcGxpdFBsdWdpbih7XG4gICAgICAgIHN0cmF0ZWd5OiAnZGVmYXVsdCcsXG4gICAgICAgIGN1c3RvbVNwbGl0dGluZzoge1xuICAgICAgICAgICdjb2RlbWlycm9yJzogWydAY29kZW1pcnJvci9zdGF0ZScsICdAY29kZW1pcnJvci92aWV3JywgJ0Bjb2RlbWlycm9yL2xhbmd1YWdlJ10sXG4gICAgICAgICAgJ2NvZGVtaXJyb3ItbGFuZyc6IFsvQGNvZGVtaXJyb3JcXC9sYW5nLS4qL10sXG4gICAgICAgICAgJ0BhbnR2L2cyJzogWydAYW50di9nMiddLFxuICAgICAgICAgICdhbnR2Nyc6IFsvQGFudHZcXC9sNyovXSxcbiAgICAgICAgICAvLyAnYW50dic6IFsnQGFudHYvbDdwbG90JywgJ0BhbnR2L2w3JywgJ0BhbnR2L2cyJ10sXG4gICAgICAgICAgLy8gJ0BhbnR2L2w3JzogWydAYW50di9sNyddLFxuICAgICAgICAgIC8vICdAYW50di9nMic6IFsnQGFudHYvZzInXSxcblxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHZpdGVDb21wcmVzc2lvbih7XG4gICAgICAgIGFsZ29yaXRobTogJ2d6aXAnLFxuICAgICAgICB0aHJlc2hvbGQ6IDEwMjQwIC8vIFx1NUJGOVx1NTkyN1x1NEU4RSAxMEtCIFx1NzY4NFx1NjU4N1x1NEVGNlx1OEZEQlx1ODg0Q1x1NTM4Qlx1N0YyOVxuICAgICAgfSlcbiAgICBdLFxuICAgIGRlZmluZToge1xuICAgICAgJ3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9CQVNFX1VSTCc6IGNvbW1hbmQgPT09ICdzZXJ2ZScgPyBjb25maWcuQVBJX1JPT1QgOiBwcm9kQ29uZmlnLkFQSV9ST09ULFxuICAgICAgJ3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9TRVNTSU9OX1ZBTFVFX0tFWSc6IGBcInNhYXMtdG9rZW5cImAsXG4gICAgICAncHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NFU1NJT05fS0VZJzogYFwic2Fhcy10b2tlblwiYCxcbiAgICAgICdwcm9jZXNzLmVudi5SRUFDVF9JTUdfUEFUSCc6ICdcIi9wYWFzL3Nob3AvXCInLFxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0AnOiAnL3NyYydcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgb3V0RGlyOiBuYW1lLFxuICAgICAgbWluaWZ5OiB0cnVlLFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBleHRlcm5hbDogWydhbnRkJywgJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdkYXlqcycsICdsb2Rhc2gnXSxcbiAgICAgIH1cbiAgICB9LFxuICB9XG59KVxuIiwgIntcbiAgXCJuYW1lXCI6IFwiYjJiLWxvd2NvZGUtZWRpdG9yXCIsXG4gIFwicHJpdmF0ZVwiOiB0cnVlLFxuICBcInZlcnNpb25cIjogXCIwLjAuMFwiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImRldlwiOiBcInZpdGVcIixcbiAgICBcImJ1aWxkXCI6IFwidml0ZSBidWlsZFwiLFxuICAgIFwiYnVpbGQxXCI6IFwidHNjICYmIHZpdGUgYnVpbGRcIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgLiAtLWV4dCB0cyx0c3ggLS1yZXBvcnQtdW51c2VkLWRpc2FibGUtZGlyZWN0aXZlcyAtLW1heC13YXJuaW5ncyAwXCIsXG4gICAgXCJwcmV2aWV3XCI6IFwidml0ZSBwcmV2aWV3XCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGJydXNoZXMvZWRpdG9yLWNvbXBvbmVudFwiOiBcIipcIixcbiAgICBcIkBicnVzaGVzL2NvbXBvbmVudC1zdG9yZS13ZWJcIjogXCIqXCIsXG4gICAgXCJAYnJ1c2hlcy9sb3djb2RlLWNvbXBvbmVudC11aVwiOiBcIipcIixcbiAgICBcIkBicnVzaGVzL2NvbXBvbmVudC1zZXR0aW5nXCI6IFwiKlwiLFxuICAgIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjogXCJeNC4xMi40XCIsXG4gICAgXCJAYW50LWRlc2lnbi9pY29uc1wiOiBcIl41LjYuMVwiLFxuICAgIFwiYW50ZC1zdHlsZVwiOiBcIl4zLjcuMVwiLFxuICAgIFwiZGVib3VuY2VcIjogXCJeMS4yLjBcIixcbiAgICBcImx6dXRmOFwiOiBcIl4wLjYuM1wiLFxuICAgIFwicmUtcmVzaXphYmxlXCI6IFwiXjYuMTEuMlwiLFxuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1mcmFtZS1jb21wb25lbnRcIjogXCJeNS4yLjdcIixcbiAgICBcInJlYWN0LXJvdXRlci1kb21cIjogXCJeNi4yMS4xXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjIuNDNcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1kb21cIjogXCJeMTguMi4xN1wiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJeNi4xNC4wXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjYuMTQuMFwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjogXCJeNC4yLjFcIixcbiAgICBcImVzbGludFwiOiBcIl44LjU1LjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtaG9va3NcIjogXCJeNC42LjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtcmVmcmVzaFwiOiBcIl4wLjQuNVwiLFxuICAgIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI6IFwiXjUuMTIuMFwiLFxuICAgIFwic2Fzc1wiOiBcIl4xLjg1LjFcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS4yLjJcIixcbiAgICBcInZpdGVcIjogXCI0LjMuOVwiLFxuICAgIFwidml0ZS1wbHVnaW4tY2RuLWltcG9ydFwiOiBcIl4xLjAuMVwiLFxuICAgIFwidml0ZS1wbHVnaW4tY2h1bmstc3BsaXRcIjogXCJeMC41LjBcIixcbiAgICBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uXCI6IFwiXjAuNS4xXCJcbiAgfVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcWluL0Rlc2t0b3AvcmVhY3QtbG93Y29kZS93ZWItbG93Y29kZS9hcHBzL2VkaXRvci9jb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9xaW4vRGVza3RvcC9yZWFjdC1sb3djb2RlL3dlYi1sb3djb2RlL2FwcHMvZWRpdG9yL2NvbmZpZy9kZXYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3Fpbi9EZXNrdG9wL3JlYWN0LWxvd2NvZGUvd2ViLWxvd2NvZGUvYXBwcy9lZGl0b3IvY29uZmlnL2Rldi50c1wiO2V4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIEFQSV9ST09UOiAnXCJodHRwczovL2IyYnBjczJiNWUzNDViNjJlNzc4NDJlZmJmMjQzOTRlMDE0Yjc1NDQuc2Fhcy5xamNsb3Vkcy5jb20vXCInLFxufTtcblxuXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9xaW4vRGVza3RvcC9yZWFjdC1sb3djb2RlL3dlYi1sb3djb2RlL2FwcHMvZWRpdG9yL2NvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3Fpbi9EZXNrdG9wL3JlYWN0LWxvd2NvZGUvd2ViLWxvd2NvZGUvYXBwcy9lZGl0b3IvY29uZmlnL3Byb2QudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3Fpbi9EZXNrdG9wL3JlYWN0LWxvd2NvZGUvd2ViLWxvd2NvZGUvYXBwcy9lZGl0b3IvY29uZmlnL3Byb2QudHNcIjtleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBBUElfUk9PVDogJ2Ake2xvY2F0aW9uLnByb3RvY29sIHx8IFwiaHR0cFwifS8vJHtsb2NhdGlvbi5ob3N0fWAnLCAvLyBcdTkxNERcdTdGNkVcdTY3MERcdTUyQTFcdTU2NjhcdTU3MzBcdTU3NDAsXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVixTQUFTLG9CQUF1QztBQUMxWSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxrQkFBa0I7OztBQ0R6QixXQUFROzs7QUNENFYsSUFBTSxTQUFTO0FBQUEsRUFDblgsVUFBVTtBQUNaOzs7QUNGd1csSUFBTUEsVUFBUztBQUFBLEVBQ3JYLFVBQVU7QUFBQTtBQUNaOzs7QUhJQSxPQUFPLFNBQVM7QUFDaEIsU0FBUyx3QkFBd0I7QUFDakMsT0FBTyxxQkFBcUI7QUFHNUIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBQyxRQUFPLE1BQU07QUFDekMsU0FBTztBQUFBLElBQ0wsTUFBTSxZQUFZLFVBQVUsTUFBTSxTQUFTO0FBQUEsSUFDM0MsU0FBUztBQUFBLE1BQ1AsV0FBVztBQUFBLFFBQ1QsTUFBTTtBQUFBLE1BQ1IsQ0FBQztBQUFBLE1BQ0QsTUFBTTtBQUFBLE1BQ04sSUFBSTtBQUFBLFFBQ0YsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxPQUFPLENBQUMsa0JBQWtCO0FBQUEsWUFDMUIsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUFBLE1BQ0QsaUJBQWlCO0FBQUEsUUFDZixVQUFVO0FBQUEsUUFDVixpQkFBaUI7QUFBQSxVQUNmLGNBQWMsQ0FBQyxxQkFBcUIsb0JBQW9CLHNCQUFzQjtBQUFBLFVBQzlFLG1CQUFtQixDQUFDLHNCQUFzQjtBQUFBLFVBQzFDLFlBQVksQ0FBQyxVQUFVO0FBQUEsVUFDdkIsU0FBUyxDQUFDLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUt4QjtBQUFBLE1BQ0YsQ0FBQztBQUFBLE1BQ0QsZ0JBQWdCO0FBQUEsUUFDZCxXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUE7QUFBQSxNQUNiLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixrQ0FBa0MsWUFBWSxVQUFVLE9BQU8sV0FBV0MsUUFBVztBQUFBLE1BQ3JGLDJDQUEyQztBQUFBLE1BQzNDLHFDQUFxQztBQUFBLE1BQ3JDLDhCQUE4QjtBQUFBLElBQ2hDO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLGVBQWU7QUFBQSxRQUNiLFVBQVUsQ0FBQyxRQUFRLFNBQVMsYUFBYSxTQUFTLFFBQVE7QUFBQSxNQUM1RDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiY29uZmlnIiwgImNvbmZpZyJdCn0K
