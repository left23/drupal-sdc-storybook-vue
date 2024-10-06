import { fn } from '@storybook/test';

import Title from './Title.vue';

export default {
  title: 'Components/Title',
  component: Title,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      Title,
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args,
      };
    },
    // Then, the spread values can be accessed directly in the template
    template: '<title :level="level">{{ text }}</title>',
  }),
  args: {
    level: fn(),
    text: "Title here"
  },
};

export const Default = {
  args: {
    level: 1
  },
};
