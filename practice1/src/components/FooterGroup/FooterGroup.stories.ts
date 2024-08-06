import { Meta, StoryObj } from "@storybook/react";
import { FooterGroup } from ".";

const meta = {
  title: 'Example/FooterGroup',
  component: FooterGroup,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof FooterGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputFormEx: Story = {
  args: {
    links: [
      { text: 'About', href: '/about' },
      { text: 'Features', href: '/features' },
      { text: 'Works', href: '/works' },
      { text: 'Career', href: '/career' }
    ],
    title: 'Company'
  }
};
