import { Meta, StoryObj } from "@storybook/react";
import Price from ".";
const meta = {
  title: 'Example/ProductCard/Price',
  component: Price,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Price>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PriceHasDiscount: Story = {
  args: {
    originalPrice: 100,
    discount: 10
  }
};


export const PriceWithoutDiscount: Story = {
  args: {
    originalPrice: 300
  }
};
