/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    "../components/**/*.stories.js",
  ],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
};
export default config;
