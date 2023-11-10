import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets';
import { MainPageContentAsync as MainPageContent } from '../MainPageContent/MainPageContentAsync';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page data-testid="MainPage">
            <MainPageContent />
        </Page>
    );
};

export default MainPage;
