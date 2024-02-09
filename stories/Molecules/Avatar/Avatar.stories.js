import i18n from '../../../.storybook/i18next';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Avatar } from './Avatar';
import { options } from './constants';

export default {
    title: "Molecules/Avatar",
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

Default.play = async({args, canvasElement}) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByAltText('Test picture')).toBeInTheDocument();
};

export const Sizes = ListTemplate.bind({});
Sizes.args = {
    items: options.sizes.map((size) => ({size})),
};