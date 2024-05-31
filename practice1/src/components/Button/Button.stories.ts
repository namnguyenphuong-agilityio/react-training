import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'medium',
    variant: 'primary',
    label: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    size: 'medium',
    variant: 'secondary',
    label: 'Button'
  }
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button'
  }
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Button'
  }
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button'
  }
};

export const FullWidth: Story = {
  args: {
    size: 'small',
    isFullWidth: true,
    label: 'Button'
  }
};
