module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      '@babel/preset-env',
      '@babel/typescript',
      ['@babel/preset-react', { development: !api.env('production'), runtime: 'automatic' }],
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/proposal-object-rest-spread',
      '@babel/plugin-syntax-dynamic-import',
      !api.env('production') && 'react-refresh/babel',
    ],
  };
};
