import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs.stories',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        {
            value: 'tab 1',
            content: 'tab 1',
        },
        {
            value: 'tab 2',
            content: 'tab 2',
        },
        {
            value: 'tab 3',
            content: 'tab 3',
        },
    ],
    value: 'tab 1',
    onTabClick: action('onTabClick'),
};
