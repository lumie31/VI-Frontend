import type { Meta, StoryObj } from '@storybook/react';
import Main, { MainProp } from '../components/Main';
import { fireEvent, userEvent, within } from '@storybook/testing-library';

const meta = {
  title: 'Components/Main',
  component: Main,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Main>;

export default meta;

type Story = StoryObj<MainProp>;

export const Default: Story = {
  args: {
    handleShow: () => {
      console.log('show');
    },
  },
};

export const Click: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await Promise.resolve(userEvent.click(canvas.getByRole('button')));
  },
};

export const FireEvent: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    fireEvent.click(canvas.getByTestId('data-testid'));
  },
};
