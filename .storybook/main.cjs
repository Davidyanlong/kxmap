const { mergeConfig } = require('vite');
// import { mergeConfig } from 'vite';
const path = require('path');
// import path from 'path';
const glsl = require('../build/plugins/rollup-plugin-glsl');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
const glslPath = 'packages/ray-tracing/src/shaders';

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    // "@storybook/addon-links",
    // "@storybook/addon-essentials",
    // "@storybook/addon-interactions"
  ],

  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: false,
  },
  //  Add dependencies to pre-optimization
  optimizeDeps: {
    include: ['storybook-dark-mode'],
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      publicDir: './static',
      server: {
        watch: {
          usePolling: true,
        },
        proxy: {
          // 字符串简写写法：http://localhost:5173/foo -> http://localhost:4567/foo
          '/tiles': 'http://localhost:8000',
        },
      },
      // Use the same "resolve" configuration as your app
      resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.fs', '.vs'],
        alias: {
          '@kxmap/core': resolve('packages/core/src'),
          '@kxmap/utils': resolve('packages/utils/src'),
        },
      },
      plugins: [
        glsl({
          include: [`${glslPath}/chunks/material_buffer/*.glsl`, `${glslPath}/chunks/*.glsl`, `${glslPath}/*`],
          watch: true,
        }),
        // glsl({
        //   include: [                   // Glob pattern, or array of glob patterns to import
        //     // '**/*.glsl', '**/*.wgsl',
        //     // '**/*.vert', '**/*.frag',
        //     // '**/*.vs', '**/*.fs',
        //   `${glslPath}/chunks/material_buffer/*.glsl`,
        //    `${glslPath}/chunks/*.glsl`,
        //    `${glslPath}/*`
        //   ],
        //   exclude: undefined,          // Glob pattern, or array of glob patterns to ignore
        //   warnDuplicatedImports: true, // Warn if the same chunk was imported multiple times
        //   defaultExtension: 'glsl',    // Shader suffix when no extension is specified
        //   compress: false,             // Compress output shader code
        //   watch: true,                 // Recompile shader on change
        //   root: '/'                    // Directory for root imports
        // })
      ],
    });
  },
};
