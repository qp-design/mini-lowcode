import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: '@brushes/component-tool',
      file: 'dist/index.js'
    }
  ],
  cache: false,
  plugins: [ts({}), terser()]
};
