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

export const NonIntegerScore: Story = {
  args: {
    rate: 4.5
  }
};

export const IntegerScore: Story = {
  args: {
    rate: 5
  }
};

export const ScoreLessThan1: Story = {
  args: {
    rate: -4.5
  }
};

export const ScoreMoreThan5: Story = {
  args: {
    rate: 15
  }
};
