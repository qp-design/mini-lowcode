import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: '@brushes/lowcode-component-ui',
      file: 'dist/index.js'
    }
  ],
  cache: false,
  external: ['@brushes/component-tool', 'lodash', 'react', 'react/jsx-runtime', '@brushes/component-core', '@brushes/component-store-web', '@brushes/simulate-component-mini'],
  plugins: [ts({}), terser()]
};

