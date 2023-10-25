import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyPopover } from './Popover';

export default {
    title: 'shared/Popover',
    component: MyPopover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MyPopover>;

const Template: ComponentStory<typeof MyPopover> = (args) => (
    <MyPopover {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
