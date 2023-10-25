import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleTypes } from '@/entities/Article';

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
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});
