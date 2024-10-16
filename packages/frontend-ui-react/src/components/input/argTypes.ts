import type { Meta } from '@storybook/react';
import type Input from './input';

type ArgTypes = Meta<typeof Input>['argTypes'];

// extend the default argTypes generated by Storybook
// there is an issue with Storybook that it will not generate all the argTypes when using forwardRef
const argTypes: ArgTypes = {
  // variant: {
  //   description: 'The variant of the button',
  //   table: {
  //     defaultValue: { summary: 'default' },
  //     type: {
  //       summary: 'default | secondary | destructive | ghost | link | outline',
  //     },
  //   },
  // },
  disabled: {
    description: 'Disables the input',
    table: {
      defaultValue: { summary: 'false' },
      type: {
        summary: 'boolean',
      },
    },
  },
  placeholder: {
    description: 'Sets the placeholder text for the input',
    table: {
      type: {
        summary: 'string',
      },
    },
  },
  label: {
    description: 'Sets the label for the input',
    table: {
      type: {
        summary: 'string',
      },
    },
  },
  error: {
    description: 'Sets the Input invalid and displays the error message',
    table: {
      type: {
        summary: 'string',
      },
    },
  },
  description: {
    description: 'Optional description text for the input',
    table: {
      type: {
        summary: 'string',
      },
    },
  },
  readOnly: {
    description: 'Makes the input read only',
    table: {
      defaultValue: { summary: 'false' },
      type: {
        summary: 'boolean',
      },
    },
  },
  onChange: {
    description:
      'Handler that is called when the element value changes. You can pull out the new value by accessing `event.target.value` (string).',
    table: {
      defaultValue: {},
      type: {
        // biome-ignore lint/nursery/noSecrets: <explanation>
        summary: '(event: React.ChangeEvent<HTMLInputElement>) => void',
      },
    },
  },
  onValueChange: {
    description: 'Handler that is called when the element value changes.',
    table: {
      defaultValue: {},
      type: {
        summary: '(value: string) => void',
      },
    },
  },
};

export default argTypes;
