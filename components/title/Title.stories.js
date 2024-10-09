import { fn } from '@storybook/test';

import Title from './Title.vue';
export default {
  component: Title,
  title: 'Components/Title',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: {
      id: '1',
      modifier: 'title',
      level: 3,
      text: 'Title text here'
    }
  },
};
