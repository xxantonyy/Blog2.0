import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs as TabsDepricated } from '@/shared/ui/deprecated/Tabs';
import { Tabs, TabItem as TabItemRedesigned } from '@/shared/ui/redesigned/Tabs';
import { ArticleTypes } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/future';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTypeTabs.module.scss';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleTypes;
    onChangeType: (type: ArticleTypes) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleTypes.ALL,
                content: t('All'),
            },
            {
                value: ArticleTypes.ECONOMICS,
                content: t('Economics'),
            },
            {
                value: ArticleTypes.IT,
                content: t('IT'),
            },
            {
                value: ArticleTypes.SCIENCE,
                content: t('Science'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleTypes);
        },
        [onChangeType],
    );

    return (
        <ToggleFeatures
            feature="isAppRedisigned" on={(
                <Tabs
                    direction="column"
                    tabs={typeTabs as TabItemRedesigned[]}
                    value={value}
                    onTabClick={onTabClick}
                    className={classNames(cls.tabs, {}, [className])}
                />
            )} off={(
                <TabsDepricated
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                    className={classNames(cls.tabs, {}, [className])}
                />
            )}
        />
    );
});
