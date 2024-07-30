import { Meta, StoryObj } from "@storybook/react";
import image from '../../assets/images/NA-t-shirt.png';
import { ProductCard } from ".";
const meta = {
  title: 'Example/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductCardHasDiscount: Story = {
  args: {
    image: image,
    title: 'T-SHIRT WITH TAPE DETAILS',
    rate: 4.5,
    originalPrice: 100,
    discount: 10
  }
};

export const ProductCardWithoutDiscount: Story = {
  args: {
    image: image,
    title: 'T-SHIRT WITH TAPE DETAILS WITHOUT DISCOUNT',
    rate: 5,
    originalPrice: 300
  }
};

export const ProductCardWithOriginalPriceLessThan0: Story = {
  args: {
    image: image,
    title: 'T-SHIRT WITH TAPE DETAILS WITHOUT DISCOUNT',
    rate: 5,
    originalPrice: -300
  }
};
