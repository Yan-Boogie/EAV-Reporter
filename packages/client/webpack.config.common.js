const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const {
  ANALYZE = 'false',
  NODE_ENV = 'development',
  PORT = NODE_ENV === 'production' ? '' : ':8050',
  HTTP_HOST = NODE_ENV === 'production' ? '' : `http://localhost${PORT}`,
  GRAPHQL_HOST = `${HTTP_HOST}/graphql`,
} = process.env;
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');
const ASSETS_PATH = path.resolve(__dirname, 'assets');
const SRC_PATH = path.resolve(__dirname, 'src');
const PUBLIC_PATH = path.resolve(SRC_PATH, 'public');

const isProduction = NODE_ENV === 'production';
const styleLoader = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const commonConfig = {
  entry: {
    app: [path.resolve(SRC_PATH, 'index.tsx')],
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        include: [SRC_PATH],
        exclude: [NODE_MODULES_PATH],
      },
      {
        test: /\.css$/i,
        use: [styleLoader, 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|mp4|mjpeg|zip)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: '[hash].[ext]',
            },
          },
        ],
        include: [ASSETS_PATH],
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: `'${NODE_ENV}'`,
      GRAPHQL_HOST: `'${GRAPHQL_HOST}'`,
    }),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(PUBLIC_PATH, 'index.html'),
      inject: 'body',
      filename: 'index.html',
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        quoteCharacter: "'",
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new OptimizeCSSAssetsPlugin({}),
    new BundleAnalyzerPlugin({
      analyzerMode: ANALYZE === 'true' ? 'server' : 'disabled',
      analyzerHost: 'localhost',
      analyzerPort: 7778,
    }),
  ],
  optimization: {
    noEmitOnErrors: true,
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 1,
        },
      },
    },
  },
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@@assets': ASSETS_PATH,
      '@@src': SRC_PATH,
    },
  },
};

module.exports = (config) => merge(commonConfig, config);
