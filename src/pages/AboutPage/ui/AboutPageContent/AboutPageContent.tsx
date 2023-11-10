/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AboutPageContent.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface AboutPageContentProps {
   className?: string;
}

const AboutPageContent = memo((props: AboutPageContentProps) => {
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
                title={t('О сайте')}
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
                        title="Какие технологии использовал при создании."
                        text="Storybook, Unit и RTL тесты, e2e тесты, Линтинг, i18n, TypeScript, Babel, CI/CD и pre-commit хуки,
                        Нормализация, Виртуализация, user agent, Feature flags, user settings."
                    />
                    <Text
                        text="Использовал futureFlags для поэтапного внедрения новых фич и дизайна."
                    />
                </VStack>
                <VStack
                    className={cls.blocks}
                    gap="16"
                >
                    <Text
                        title="О проекте."
                        text="Это сайт статей, с профилем пользователя, возможностью переключения темы и языка. У каждого пользователя свой профиль, оставляя комментарии и создавая статьи можно перейти на профиль пользователя который оставил комментарий или запостил статью."
                    />
                    <Text
                        text="Есть возможность настроить свой профиль, на карточке профиля есть простенькая валидация данных. Так же на статье и на профиле у user'а есть возможность оставить отзыв с комментарием о статье или пользователе."
                    />
                </VStack>
                <VStack
                    className={cls.blocks}
                    gap="16"
                >
                    <Text
                        title="О функционале."
                        text="В репозитории Github есть README в которой описан функционал и команды для управления проектом."
                    />
                </VStack>
            </Card>

        </Card>
    );
});

export default AboutPageContent;
