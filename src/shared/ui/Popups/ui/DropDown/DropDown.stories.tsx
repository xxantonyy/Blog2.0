import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyDropdown } from './DropDown';
import { Button } from '../../../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: MyDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MyDropdown>;

const Template: ComponentStory<typeof MyDropdown> = (args) => (
    <MyDropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open</Button>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};
