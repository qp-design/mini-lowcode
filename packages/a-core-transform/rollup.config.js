import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: '@brushes/core-transform-mini',
      file: 'dist/index.js'
    }
  ],
  cache: false,
  external: ['antd', 'react/jsx-runtime', 'react', '@brushes/form', '@craftjs/core', 'lodash'],
  plugins: [ts({}), terser()]
};
