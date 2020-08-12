import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Showcase: {
            screens: {
              ShowcaseScreen: 'one',
            },
          },
          Contact: {
            screens: {
              ContactScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
