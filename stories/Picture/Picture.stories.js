import { Picture } from './Picture';

export default {
    title: "Picture",
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

export const Rounded = Template.bind({});
Rounded.args = {
    isRounded: true,
};