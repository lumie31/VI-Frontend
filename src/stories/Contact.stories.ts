import type { Meta, StoryObj } from '@storybook/react';
import Contact, { ContactProp } from '../components/Contact';

const meta = {
  title: 'Components/Contact',
  component: Contact,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Contact>;

export default meta;

type Story = StoryObj<ContactProp>;

export const Default: Story = {
  args: {
    show: true,
    handleClose: () => {
      console.log('close');
    },
  },
};
