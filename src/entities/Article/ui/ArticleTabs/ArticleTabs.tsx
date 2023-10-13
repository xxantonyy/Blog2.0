import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { ArticleTypes } from '@/entities/Article/model/types/article';

interface ArticleTabsProps {
   className?: string;
   onChangeType: (type: ArticleTypes) => void;
   value: ArticleTypes;
}

export const ArticleTabs = (props: ArticleTabsProps) => {
    const {
        className,
        onChangeType,
        value,
    } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(() => [
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
    ], [t]);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleTypes);
    }, [onChangeType]);

    return (
        <div className={classNames('', {}, [className])}>
            <Tabs
                tabs={typeTabs}
                value={value}
                onTabClick={onTabClick}
            />
        </div>
    );
};
