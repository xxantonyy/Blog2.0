/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPageContent.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface MainPageContentProps {
   className?: string;
}

const MainPageContent = memo((props: MainPageContentProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    return (
        <Card
            padding="16"
            className={classNames(cls.MainPageContent, {}, [className])}
            border="partial"
        >
            <Text
                size="l"
                bold
                align="center"
                title={t('Главная страница')}
                className={cls.header}
            />

            <Card
                border="normal_round"
                padding="16"
                className={cls.about}
            >
                <VStack
                    className={cls.blocks}
                    gap="16"
                >
                    <Text
                        title="О чем этот проект?"
                        text="Этот учебный проект был создан в следствии прохождения мною курса по React."
                    />
                    <Text
                        text="В этом проекте была применено множество технологий, типизация TypeScript, reducerManager, асинхронная подгрузка сомпонентов редюсеров и библиотек."
                    />
                </VStack>
                <VStack
                    gap="16"
                >
                    <Text
                        title="'О проекте'"
                        text="Во вкладке 'О сайте' можно поподрорбнее узнать о технологиях и методах применяемых при создании этого проекта."
                    />
                    <Text
                        text="Проект использует фейковый бек, хоститься на Netlify, бэк лежит на Vercel."
                    />
                    <Text
                        title="Github репозиторий."
                    />
                    <Card border="round">
                        <a target="_blank" href="https://github.com/xxantonyy/Blog2.0" rel="noreferrer">GitHub</a>
                    </Card>
                </VStack>
            </Card>

        </Card>
    );
});

export default MainPageContent;
