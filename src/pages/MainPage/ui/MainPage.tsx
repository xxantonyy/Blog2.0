import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/Input/Input';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/RatingCard';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            <RatingCard />
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
