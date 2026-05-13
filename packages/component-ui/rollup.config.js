import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: '@brushes/component-core-mini',
      file: 'dist/index.js',
      format: 'es'
    }
  ],
  cache: false,
  external: ['@brushes/simulate-component-mini', '@brushes/navigator-tool', '@tarojs/taro', 'lzutf8', '@brushes/utils', '@brushes/optimize', '@brushes/editor-component-mini', '@brushes/component-tool', 'react/jsx-runtime','react','lodash','@craftjs/core', '@brushes/context'],
  plugins: [
    resolve({
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    terser()
  ]
};
