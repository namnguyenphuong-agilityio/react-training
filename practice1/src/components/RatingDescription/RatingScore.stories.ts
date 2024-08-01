import { Meta, StoryObj } from "@storybook/react";
import { RatingDescription } from ".";
const meta = {
  title: 'Example/RatingDescription',
  component: RatingDescription,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof RatingDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RatingDescriptionExample: Story = {
  args: {
    rate: 5,
    author: "Sarah M.",
    description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  }
};
