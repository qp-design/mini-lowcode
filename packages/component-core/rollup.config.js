import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: '@brushes/component-core-mini',
      file: 'dist/index.js'
    }
  ],
  cache: false,
  external: ['@brushes/simulate-component-mini', '@brushes/share-resource', 'react/jsx-runtime','react', 'zustand','lodash','zustand/middleware','@craftjs/core'],
  plugins: [ts({}), terser()]
};
