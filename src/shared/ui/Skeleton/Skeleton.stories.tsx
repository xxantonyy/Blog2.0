import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    height: 200,
    width: 200,
};

export const Circle = Template.bind({});
Circle.args = {
    height: 100,
    width: 100,
    border: '50%',
};

export const NormalDark = Template.bind({});
NormalDark.args = {
    height: 100,
    width: 100,
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalDarkCircle = Template.bind({});
NormalDarkCircle.args = {
    height: 100,
    width: 100,
    border: '50%',
};
NormalDarkCircle.decorators = [ThemeDecorator(Theme.DARK)];
