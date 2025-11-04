import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: '@brushes/component-core',
      file: 'dist/index.js'
    }
  ],
  cache: false,
  external: ['react-router-dom','react/jsx-runtime','react','antd','@brushes/form','@brushes/request','zustand','lodash','zustand/middleware','@craftjs/core','qj-b2c-api','@brushes/share-resource','antd-style'],
  plugins: [ts({}), terser()]
};
