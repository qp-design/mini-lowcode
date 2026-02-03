import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: '@brushes/mobile-form-mini',
      file: 'dist/index.js'
    }
  ],
  cache: false,
  external: ['react/jsx-runtime','@brushes/simulate-component-mini','react','lodash'],
  plugins: [ts({}), terser()]
};
