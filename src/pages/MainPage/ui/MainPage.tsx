import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return <Page data-testid="MainPage">{t('Главная страница')}</Page>;
};

export default MainPage;
