import type { Meta, StoryObj } from '@storybook/react';

import HowWeWork from './HowWeWork';

const meta = {
  component: HowWeWork,
} satisfies Meta<typeof HowWeWork>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
