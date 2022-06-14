const webpack = require('webpack');
const createConfig = require('./webpack.config.common');

module.exports = createConfig({
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  entry: {
    app: ['react-hot-loader/patch'],
  },
  devServer: {
    compress: true,
    disableHostCheck: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    port: 7777,
    publicPath: '/',
    stats: {
      assets: false,
      children: false,
      chunks: false,
      chunkModules: false,
      colors: true,
      entrypoints: false,
      hash: false,
      modules: false,
      timings: false,
      version: false,
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
});
