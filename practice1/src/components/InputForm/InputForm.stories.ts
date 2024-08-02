import { Meta, StoryObj } from "@storybook/react";
import { InputForm } from ".";
import GmailIcon from "../icons/GmailIcon";

const meta = {
  title: 'Example/InputForm',
  component: InputForm,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof InputForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputFormEx: Story = {
  args: {
    Icon: GmailIcon,
    placeholder: 'Enter your email address'
  }
};
