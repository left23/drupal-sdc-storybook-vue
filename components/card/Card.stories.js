import { fn } from '@storybook/test';

// import Card from './card.twig';
import Card from './Card.vue';
export default {
  component: Card,
  title: 'Components/Card',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    card: {
      id: '1',
      title: 'Card Title',
      modifier: 'card',
      text: 'Card text here'
    },
  },
};
