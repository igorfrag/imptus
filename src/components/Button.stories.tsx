import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const colorOptions = [
  'primary-azulprofundo',
  'primary-azulescuro',
  'primary-azulintermediario',
  'primary-azulclaro',
  'primary-azultecnologico',
  'secondary-laranjaqueimado',
  'secondary-azulneon',
  'neutral-cinzaclaro',
  'neutral-cinzamedio',
  'neutral-black',
  'neutral-branco',
];

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    bgColor: {
      control: 'select',
      options: colorOptions,
    },
    borderColor: {
      control: 'select',
      options: colorOptions,
    },
    textColor: {
      control: 'select',
      options: colorOptions,
    },
    hoverBg: {
      control: 'select',
      options: colorOptions,
    },
    hoverText: {
      control: 'select',
      options: colorOptions,
    },
    hoverBorder: {
      control: 'select',
      options: colorOptions,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Texto',
    size: 'xl',
    bgColor: 'primary-azulescuro',
    borderColor: 'secondary-azulneon',
    textColor: 'secondary-azulneon',
    hover: true || false,
    hoverBg: '',
    hoverText: 'secondary-laranjaqueimado',
    hoverBorder: 'secondary-laranjaqueimado',
  },
};
