import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import { eslint } from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

/* eslint-disable no-undef */

const ENV = process.env.NODE_ENV

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/ss_js_utils.min.js',
    format: 'umd',
    name: 'validator'
  },
  plugins: [
    json(),
    eslint({
      throwOnError: true,
      throwOnWarning: false,
      include: ['src/**'],
      exclude: ['node_modules/**']
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV)
    }),
    (ENV === 'production' && uglify())
  ]
}
