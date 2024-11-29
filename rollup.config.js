import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js", // Entry point
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true, // Enable sourcemaps
      sourcemapExcludeSources: true, // Exclude inline sources
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
      sourcemapExcludeSources: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies
    nodeResolve({
      extensions: [".js", ".jsx", ".css"], // Resolve these extensions
    }),
    babel({
        exclude: "node_modules/**",
        babelHelpers: "runtime",
        extensions: [".js", ".jsx"],
        presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    postcss({
        modules: true, // Enable CSS Modules
        extract: true, // Extract CSS into a separate file
        minimize: true, // Minify CSS for production
        sourceMap: true, // Generate source maps for debugging
    }),
    commonjs(), // Handle CommonJS dependencies
    terser({
      format: {
        comments: false, // Remove comments
      },
    }),// Minify the JavaScript output
  ],
  external: ["react", "react-dom"], // Mark React as external
};