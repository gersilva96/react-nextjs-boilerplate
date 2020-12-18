/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const sass = require('sass');

const srcPath = path.resolve(__dirname, 'src');
const constantsPath = path.resolve(__dirname, 'src', 'constants');
const controllerPath = path.resolve(__dirname, 'src', 'controller');
const errorsPath = path.resolve(__dirname, 'src', 'errors');
const internationalizationPath = path.resolve(__dirname, 'src', 'internationalization');
const modelPath = path.resolve(__dirname, 'src', 'model');
const servicesPath = path.resolve(__dirname, 'src', 'services');
const typesPath = path.resolve(__dirname, 'src', 'types');
const utilsPath = path.resolve(__dirname, 'src', 'utils');
const viewsPath = path.resolve(__dirname, 'src', 'views');

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
      '@constants': constantsPath,
      '@controller': controllerPath,
      '@errors': errorsPath,
      '@internationalization': internationalizationPath,
      '@model': modelPath,
      '@services': servicesPath,
      '@types': typesPath,
      '@utils': utilsPath,
      '@views': viewsPath,
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
};
