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
              modules: true,
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
              modules: true,
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
              implementation: sass,
              sassOptions: { includePaths: [srcPath] },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      favicon: path.resolve(__dirname, 'public', 'images', 'favicon.png'),
      inject: 'body',
    }),
  ],
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, 'build'),
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
  },
  resolve: {
    alias: {
      '~': srcPath,
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
};
