import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: '@brushes/component-store-web',
      file: 'dist/index.js'
    }
  ],
  cache: false,
  external: [''],
  plugins: [ts({}), terser()]
};
