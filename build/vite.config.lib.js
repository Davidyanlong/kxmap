import path from 'path';
import { defineConfig } from 'vite';
import glsl from './plugins/rollup-plugin-glsl';
const glslPath = 'src/shaders';
import { terser } from 'rollup-plugin-terser';
import { entry, getUMDName, getFileNameZip, external, globals, currentPath} from './common'

export default defineConfig({
	plugins: [
		glsl({
			include: [`${glslPath}/chunks/material_buffer/*.glsl`, `${glslPath}/chunks/*.glsl`, `${glslPath}/*`],
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(currentPath, './src')
		}
	},
	build: {
    emptyOutDir: false,
		assetsDir: 'chunks',
		lib: {
			entry,
			name: getUMDName(),
			fileName: (format,entryName) => getFileNameZip(format,entryName),
		},
		outDir: 'dist',
		minify: 'terser',
		rollupOptions: {
			external: ['three',...external],
			output: [{
				format:'umd',
				globals: {
					three: 'THREE',
					...globals
				}
			},{
				format:'es',
				globals: {
					three: 'THREE',
					...globals
				},
        plugins: [terser({
          ecma:2015,
          compress: {
          arguments: true,
          dead_code: true,
        },
        toplevel: true,
        keep_classnames: true,
        keep_fnames: true,})], // 在 lib 模式下使用 'es' 时，build.minify 选项不会缩减空格，因为会移除掉 pure 标注，导致破坏 tree-shaking。
			}]
		}
	}
});
