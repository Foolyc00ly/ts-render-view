import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url'
export default defineConfig({
   base: './',
   define: { 'process.env': {} },
   resolve: {
      alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: [
         '.js',
         '.json',
         '.jsx',
         '.mjs',
         '.ts',
         '.tsx',
      ],
   },
});