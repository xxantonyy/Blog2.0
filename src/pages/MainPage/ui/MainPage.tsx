import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('Главная страница')}
            <HStack>
                <ListBox
                // eslint-disable-next-line i18next/no-literal-string
                    defaultValue="Выберите значение"
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '123' },
                        { value: '2', content: 'dfgd', disabled: true },
                        { value: '3', content: '12esdfg' },
                    ]}
                />
            </HStack>
        </Page>
    );
};

export default MainPage;
