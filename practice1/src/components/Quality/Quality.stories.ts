import { Meta, StoryObj } from "@storybook/react";
import { Quality } from ".";

const meta = {
  title: 'Example/Quality',
  component: Quality,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Quality>;

export default meta;
type Story = StoryObj<typeof meta>;

export const QualityExample: Story = {
  args: {
    quantity: '200,000+',
    label: 'Happpy Customers'
  }
};
