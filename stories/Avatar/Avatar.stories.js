import { Avatar } from './Avatar';
import { options } from './constants';

export default {
    title: "Avatar",
    component: Avatar,
    tags: ['autodocs'],
    args: {
        src: "https://picsum.photos/id/777/200/200",
        alt: "Test picture",
    },
    argTypes: {
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

const Template = (args) => <Avatar {...args} />;

const ListTemplate = ({items, ...args}) => items.map
((item, index) => <Avatar key={index} {...args} {...item}/>);

export const Default = Template.bind({});

export const Sizes = ListTemplate.bind({});
Sizes.args = {
    items: options.sizes.map((size) => ({size})),
};