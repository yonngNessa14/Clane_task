module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@lib': './src/lib',
          '@helpers': './src/helpers',
          '@util': './src/util',
        },
      },
      'react-native-reanimated/plugin',
    ],
  ],
};
