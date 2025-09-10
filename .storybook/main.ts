import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  stories: [`${process.cwd()}/stories/**/*.stories.@(js|tsx)`],
  addons: ['@storybook/addon-links'],
};

export default config;
