import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from '@/entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
    <ArticleRecommendationsList {...args} />
);

const article: Article = {
    id: '17',
    title: 'Kotlin news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfqBhkessB6BdwO_wdfVG_Ihli5PEG-YVmzeGC184IQQejIhbj-h1Sc7Lt3zxDXatkJa0&usqp=CAU',
    views: 1022,
    createdAt: '26.02.2022',
    type: [],
    blocks: [],
    user: { id: '1', username: '123' },
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],
        },
    ],
};
