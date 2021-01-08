/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const sass = require('sass');

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.(j|t)sx?/i,
        exclude: /node_modules/,
        use: { loader: 'ts-loader' },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: sass,
              sassOptions: { includePaths: ['./src'] },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '~': srcPath,
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
};
