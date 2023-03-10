import path from 'path';
import { defineConfig } from 'vite';
import glsl from './plugins/rollup-plugin-glsl';
const glslPath = 'src/shaders';
import { entry, getUMDName, getFileName, external, globals, currentPath } from './common'

export default defineConfig({
	plugins: [
		glsl({
			include: [`${glslPath}/chunks/material_buffer/*.glsl`, `${glslPath}/chunks/*.glsl`, `${glslPath}/*`],
		})
	],
	resolve: {
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.fs', '.vs'],
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
			fileName: (format,entryName) => getFileName(format),
		},
		outDir: 'dist',
		minify: false,
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
				}
			}]
		}
	}
});
