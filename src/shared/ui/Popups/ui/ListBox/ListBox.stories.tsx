import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
    items: [
        {
            content: '123123123',
            value: '1',
        },
        {
            content: '2222',
            value: '2',
        },
    ],
};
export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    items: [
        {
            content: '123123123',
            value: '1',
        },
        {
            content: '2222',
            value: '2',
        },
    ],
};
export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    items: [
        {
            content: '123123123',
            value: '1',
        },
        {
            content: '2222',
            value: '2',
        },
    ],
};
export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
    items: [
        {
            content: '123123123',
            value: '1',
        },
        {
            content: '2222',
            value: '2',
        },
    ],
};
