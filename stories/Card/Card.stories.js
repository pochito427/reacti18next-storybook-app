import { Card } from './Card';
import { options } from './constants';

export default {
    title: "Card",
    component: Card,
    tags: ['autodocs'],
    args: {
        children: "I'm a card by default"
    },
    argTypes: {
        color: {
            description: "**options:**",
            table: {
                type: {
                    summary: options.colors.map(option => `'${option}'`).join("|")
                }
            },
            control: {
                type: "select",
                options: options.colors
            }
        },
        size: {
            description: "**options:**",
            table: {
                type: {
                    summary: options.sizes.map(option => `'${option}'`).join("|")
                }
            },
            control: {
                type: "select",
                options: options.sizes
            }
        }
    }
};

const Template = (args) => <Card {...args} />;

const ListTemplate = ({items, ...args}) => items.map
((item, index) => <Card key={index} {...args} {...item}/>);

export const Default = Template.bind({});

export const Clickable = Template.bind({});
Clickable.args = {
    isClickable: true,
};

export const Dragable = Template.bind({});
Dragable.args = {
    isDragable: true,
};

export const Colors = ListTemplate.bind({});
Colors.args = {
    items: options.colors.map((color) => ({color})),
};

export const Sizes = ListTemplate.bind({});
Sizes.args = {
    items: options.sizes.map((size) => ({size})),
};