import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfilePage } from '..';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'Антон',
            lastname: 'Нестеров',
            age: 23,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Москва',
            username: 'admin',
            avatar: 'https://kartinki.pibig.info/uploads/posts/2023-04/1682016583_kartinki-pibig-info-p-kartinka-kotik-za-kompyuterom-arti-instagr-1.jpg',
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'Антон',
            lastname: 'Нестеров',
            age: 23,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Москва',
            username: 'admin',
            avatar: 'https://kartinki.pibig.info/uploads/posts/2023-04/1682016583_kartinki-pibig-info-p-kartinka-kotik-za-kompyuterom-arti-instagr-1.jpg',
        },
    },
})];
