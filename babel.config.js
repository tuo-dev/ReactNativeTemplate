module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@Types': './src/@Types',
          '@apis': './src/apis',
          '@assets': './src/assets',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@hooks': './src/hooks',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@styles': './src/styles',
          '@utils': './src/utils'
        }
      }
    ],
    ['module:react-native-dotenv',
      {
        'envName': 'APP_ENV',
        'moduleName': '@env',
        'path': '.env',
        'safe': false,
        'allowUndefined': true,
        'verbose': false
      }
    ]
  ]
};
