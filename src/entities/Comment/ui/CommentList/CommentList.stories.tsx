import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { action } from '@storybook/addon-actions';

import { $api } from 'shared/api/api';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [{
        id: '1',
        text: '12314w3r2',
        user: {
            id: '1',
            username: 'user',
            avatar: 'https://sun9-68.userapi.com/impg/UXAyJ38vGTwT_O6_qzGIQSjCLWNxncf2RE5A6w/5275X5kiSf4.jpg?size=810x1080&quality=95&sign=1b47a08ba0d066b212092fca4aa89c1b&type=album',
        },
    }],
};
Normal.decorators = [
    StoreDecorator({}),
];
