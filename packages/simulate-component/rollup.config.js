import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
export default {
  input: 'src/index.ts',
  output: [
    {
      name: 'api-index',
      dir: 'dist',
    }
  ],
  external: ['react/jsx-runtime', 'antd-mobile', 'lodash', 'classnames', '@tarojs/components', '@brushes/utils', 'react', 'lodash-es'],
  plugins: [
    ts({}),
    terser(),
  ]
};
