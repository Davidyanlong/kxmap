// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: { node: 'current' },
        bugfixes: true,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-object-assign',
  ],
};
