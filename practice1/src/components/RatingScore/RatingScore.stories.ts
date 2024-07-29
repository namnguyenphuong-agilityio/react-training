import { Meta, StoryObj } from "@storybook/react";
import { RatingScore } from ".";
const meta = {
  title: 'Example/RatingScore',
  component: RatingScore,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof RatingScore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RatingWithNonIntegerScore: Story = {
  args: {
    rate: 4.5
  }
};

export const RatingWithIntegerScore: Story = {
  args: {
    rate: 5
  }
};
