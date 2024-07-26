import { Meta, StoryObj } from "@storybook/react";
import { ItemCard } from ".";
import image from '../../assets/images/NA-t-shirt.png';
const meta = {
  title: 'Example/ItemCard',
  component: ItemCard,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ItemCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ItemCardHasDiscount: Story = {
  args: {
    image: image,
    title: 'T-SHIRT WITH TAPE DETAILS',
    rate: 4.5,
    originalPrice: 100,
    discount: 10
  }
};

export const ItemCardWithoutDiscount: Story = {
  args: {
    image: image,
    title: 'T-SHIRT WITH TAPE DETAILS WITHOUT DISCOUNT',
    rate: 5,
    originalPrice: 300
  }
};
