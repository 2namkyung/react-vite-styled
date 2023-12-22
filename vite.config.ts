import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src/') },
      { find: '@store', replacement: resolve(__dirname, 'src/store') },
      { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
    ],
  },
});
