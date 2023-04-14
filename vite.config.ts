import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import dts from 'vite-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'

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
      external: [
        'react',
        'react-proptypes',
        'react-dom',
        '@mui/material',
        '@mui/system',
        '@emotion/styled',
        '@emotion/react',
      ],
      output: [
        {
          format: 'umd',
          name: 'mui',
        },
        {
          preserveModules: true,
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
