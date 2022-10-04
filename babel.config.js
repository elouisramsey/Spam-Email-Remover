module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.ios.js',
          '.android.js',
          '.svg',
        ],
        alias: {
          '*': '.',
          '@root': './',
          '@src': './src',
          '@components': ['./src/components'],
          '@assets': ['./src/assets'],
          '@styles': ['./src/styles'],
          '@navigation': ['./src/navigations'],
          '@atoms': ['./src/components/atoms'],
          '@utils': ['./src/utils'],
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
