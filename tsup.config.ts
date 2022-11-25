import { defineConfig } from 'tsup';
import { ScssModulesPlugin } from 'esbuild-scss-modules-plugin';

export default defineConfig({
  dts: true,
  clean: true,
  minify: true,
  treeshake: true,
  splitting: true,
  entry: ['./src/index.tsx'],
  format: ['cjs', 'esm'],
  esbuildPlugins: [ScssModulesPlugin()]
});
