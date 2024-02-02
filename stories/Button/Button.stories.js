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
    ariaLabel: 'Button',
  },
};

Primary.play = async({args, canvasElement}) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(canvas.getByText('Button')).toBeInTheDocument();
  await expect(canvas.getByLabelText('Button')).toBeInTheDocument();
};

export const Secondary = {
  args: {
    label: 'Button',
    ariaLabel: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
    ariaLabel: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
    ariaLabel: 'Button',
  },
};


export const Warning = {
  args: {
    primary: true,
    warn: true,
    label: 'Delete now',
    ariaLabel: 'Delete now',
    backgroundColor: 'yellow',
  }
};

Warning.play = async({args, canvasElement}) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(canvas.getByText('Delete now')).toBeInTheDocument();
  await expect(canvas.getByLabelText('Delete now')).toBeInTheDocument();
};