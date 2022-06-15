const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const createConfig = require('./webpack.config.common');

module.exports = createConfig({
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 7777,
    client: { overlay: false },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
