/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const sass = require('sass');

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',

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
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[local]' },
              sourceMap: true,
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
              modules: { localIdentName: '[local]' },
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // Prefer `dart-sass`
              implementation: sass,
              sassOptions: { includePaths: ['./src'] },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'dev', 'index.html'),
    }),
  ],
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, 'build'),
    port: 3000,
  },
  resolve: {
    alias: {
      '~': srcPath,
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
};
