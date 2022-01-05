/* eslint-disable no-undef */
import esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outdir: 'lib',
    bundle: true,
    sourcemap: true,
    minify: true,
    splitting: true,
    format: 'esm',
    target: ['esnext'],
    external: ['@arcgis/core'],
  })
  .catch(() => process.exit(1));
