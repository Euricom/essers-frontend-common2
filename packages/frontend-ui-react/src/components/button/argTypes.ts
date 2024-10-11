import type { Meta } from '@storybook/react';
import type Button from './button';

type ArgTypes = Meta<typeof Button>['argTypes'];

// extend the default argTypes generated by Storybook
// there is an issue with Storybook that it will not generate all the argTypes when using forwardRef
const argTypes: ArgTypes = {
  variant: {
    description: 'The variant of the button',
    table: {
      defaultValue: { summary: 'default' },
      type: {
        summary: 'default | secondary | destructive | ghost | link | outline',
      },
    },
  },
  size: {
    description: 'The size of the button',
    table: {
      defaultValue: { summary: 'default' },
      type: {
        summary: 'default | sm | lg | icon',
      },
    },
  },
  type: {
    description: 'The type of the button',
    table: {
      defaultValue: { summary: 'submit' },
      type: {
        summary: 'submit | button',
      },
    },
  },
  fullWidth: {
    description: 'Show the button as fullWidth element',
    table: {
      defaultValue: { summary: 'false' },
      type: {
        summary: 'boolean',
      },
    },
  },
  loading: {
    description: 'Show a loading indicator',
    table: {
      defaultValue: { summary: 'false' },
      type: {
        summary: 'boolean',
      },
    },
  },
  onClick: {
    description: 'Event handler called when button is clicked.',
    table: {
      defaultValue: {},
      type: {
        summary: '(event: Event) => void',
      },
    },
  },
};

export default argTypes;
