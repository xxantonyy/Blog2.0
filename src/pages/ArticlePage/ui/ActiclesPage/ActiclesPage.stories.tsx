import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ActiclesPage from './ActiclesPage';

export default {
    title: 'page/ActiclesPage',
    component: ActiclesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ActiclesPage>;

const Template: ComponentStory<typeof ActiclesPage> = (args) => (
    <ActiclesPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
