import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],        // 入口文件
    format: ['esm'],                // 输出格式
    dts: true,                      // 生成类型声明
    clean: true,                    // 清理 dist 目录
    sourcemap: false,                // 生成 sourcemap
    minify: process.env.NODE_ENV === 'production',
    splitting: true,               // 代码分割
    treeshake: true,                // 摇树优化
    external: ['@brushes/component-core'],  // 外部依赖
    outDir: 'dist',                 // 输出目录
})