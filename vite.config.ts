import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import dts from 'vite-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'
import pkg from './package.json'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const externalPackages = [
  ...Object.keys(pkg.peerDependencies ?? {}),
  ...Object.keys(pkg.dependencies ?? {}),
]
// Creating regexes of the packages to make sure subpaths of the
// packages are also treated as external
const regexesOfPackages = externalPackages.map(
  (packageName) => new RegExp(`^${packageName}(/.*)?`),
)

export default defineConfig({
  plugins: [
    visualizer(),
    dts({
      insertTypesEntry: true,
    }),
    nodeResolve(),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
    },
    rollupOptions: {
      external: regexesOfPackages,
      output: [
        {
          format: 'umd',
          name: 'mui',
        },
        {
          format: 'commonjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          dir: 'dist',
          entryFileNames: '[name].cjs',
        },
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          dir: 'dist',
          entryFileNames: '[name].mjs',
        },
      ],
    },
    emptyOutDir: false,
  },
  resolve: {
    alias: {
      '@src': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
