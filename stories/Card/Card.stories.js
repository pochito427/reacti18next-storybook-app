import { Card } from './Card';
import { options } from './constants';

export default {
    title: "Card",
    component: Card,
    tags: ['autodocs'],
};

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})

export const Clickable = Template.bind({})
Clickable.args = {
    isClickable: true
}

export const Dragable = Template.bind({})
Dragable.args = {
    isDragable: true
}

export const Colors = () => 
    options.colors.map((color, index) => {
        return <Card key={index} color={color}/>;
    });

export const Sizes = () => 
    options.sizes.map((size, index) => {
        return <Card key={index} size={size}/>;
    });