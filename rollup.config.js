const sourceMaps = require('rollup-plugin-sourcemaps');
const packageJSON = require('./package.json');

export const ignoresNonDefaultExports = true;

export default {
  input: 'dist/index.js',
  output: [
    {
      file: packageJSON.main,
      format: 'umd',
      name: 'typeScriptProLibrary',
      sourcemap: true,
    },
  ],

  plugins: [sourceMaps()],
};
