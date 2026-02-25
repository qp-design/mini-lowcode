import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: '@brushes/editor-component-mini',
      file: 'dist/index.js'
    }
  ],
  cache: false,
  external: ['@brushes/lowcode-component-ui', '@brushes/mobile-form', 'lodash', 'react', 'react/jsx-runtime', '@brushes/component-core-mini', '@brushes/component-store-web', '@brushes/simulate-component-mini'],
  plugins: [ts({}), terser()]
};

