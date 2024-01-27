import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

Primary.play = async({args, canvasElement}) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(canvas.getByText('Button')).toBeInTheDocument();
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};


export const Warning = {
  args: {
    primary: true,
    label: 'Delete now',
    backgroundColor: 'red',
  }
};

Warning.play = async({args, canvasElement}) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(canvas.getByText('Delete now')).toBeInTheDocument();
};