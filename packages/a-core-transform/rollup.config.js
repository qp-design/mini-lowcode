import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: '@brushes/core-transform',
      file: 'dist/index.js'
    }
  ],
  cache: false,
  external: ['@brushes/form','zustand/middleware','react/jsx-runtime', '@uiw/react-codemirror','@uiw/codemirror-theme-github','@uiw/codemirror-extensions-langs','@codemirror/lang-javascript','antd-style','react','antd','react-router-dom','@brushes/request','@brushes/share-resource','zustand','@craftjs/core','lodash','qj-b2c-api','@tanstack/react-query','lzutf8','@brushes/optimize','react-error-boundary','sucrase','@antv/l7','@antv/l7plot','@antv/g2','dayjs','@brushes/component-store-web'],
  plugins: [ts({}), terser()]
};
