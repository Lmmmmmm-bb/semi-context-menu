import { defineConfig } from 'tsup';

export default defineConfig({
  dts: true,
  clean: true,
  minify: true,
  treeshake: true,
  splitting: true,
  entry: ['./src/index.ts'],
  format: ['esm'],
});
