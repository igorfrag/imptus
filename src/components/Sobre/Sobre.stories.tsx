import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Sobre from './Sobre';

const meta: Meta<typeof Sobre> = {
  title: 'Componentes/Sobre',
  component: Sobre,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Sobre>;

export const Default: Story = {
  args: {},
};
