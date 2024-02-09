import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Picture } from './Picture';

export default {
    title: "Atoms/Picture",
    component: Picture,
    tags: ['autodocs'],
    args: {
        src: "https://picsum.photos/id/427/400/400",
        alt: "Alternative text",
        width: 200
    },
    argTypes: {
        width: { control: "number" },
        height: { control: "number" } 
    }
};

const Template = (args) => <Picture {...args} />;

export const Default = Template.bind({});

Default.play = async({args, canvasElement}) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByAltText('Alternative text')).toBeInTheDocument();
};

export const Rounded = Template.bind({});
Rounded.args = {
    isRounded: true,
};