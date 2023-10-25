import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from '@/entities/Currency';
import { CurrenctSelect } from './CurrenctSelect';

export default {
    title: 'entities/CurrenctSelect',
    component: CurrenctSelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CurrenctSelect>;

const Template: ComponentStory<typeof CurrenctSelect> = (args) => (
    <CurrenctSelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    value: Currency.RUB,
};
