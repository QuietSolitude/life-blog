import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.ts',
  output: {
    sourcemap: true,
    file: 'dist/main.js',
    format: 'umd'
  },

  plugins: [
    typescript(),
    nodeResolve(),
  ],
};