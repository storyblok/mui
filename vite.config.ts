import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import dts from 'vite-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'
import pkg from './package.json'

const externalPackages = Object.keys(pkg.peerDependencies ?? {})
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
          preserveModules: true,
          preserveModulesRoot: 'src',
          format: 'es',
          dir: 'dist',
          entryFileNames: '[name].js',
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
