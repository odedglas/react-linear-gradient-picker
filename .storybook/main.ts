import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },

  stories: [`${process.cwd()}/stories/**/*.stories.@(js|tsx)`],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/preset-scss', '@storybook/addon-webpack5-compiler-swc'],

  docs: {
    autodocs: false,
  },
};

export default config;
