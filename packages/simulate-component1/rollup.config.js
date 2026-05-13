import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
export default {
  input: 'src/index.ts',
  output: [
    {
      name: '@brushes/simulate-component-mini',
      dir: 'dist',
    }
  ],
  external: ['react/jsx-runtime', '@craftjs/core', '@nutui/nutui-react-taro', 'lodash', '@tarojs/components', '@brushes/utils', 'react'],
  plugins: [
    ts({}),
    terser(),
  ]
};
