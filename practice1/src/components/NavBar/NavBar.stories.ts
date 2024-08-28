import { Meta, StoryObj } from "@storybook/react";
import NavBar from ".";

const meta = {
  title: 'Example/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    navLinks: {
      description: 'List of links to display in NavBar',
    }
  }
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const navLinks =[
  { href: '/shop', text: 'Shop' , subLinks: [{ href: '/men', text: 'Men' }, { href: '/women', text: 'Women' }] },
  { href: '/sale', text: 'On Sale' },
  { href: '/new', text: 'New Arrivals' },
  { href: '/brands', text: 'Brands' }
];
export const NavigationBar: Story = {
  args: {
    navLinks: navLinks
  }
};

