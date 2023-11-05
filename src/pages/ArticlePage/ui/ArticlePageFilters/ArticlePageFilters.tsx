import { useTranslation } from 'react-i18next';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import cls from './ArticlePageFilters.module.scss';
import { useArticleFilters } from '../../hooks/useArticleFilters';

interface ArticlePageFiltersProps {
    className?: string;
}

export const ArticlePageFilters = (props: ArticlePageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        order,
        search,
        sort,
        type,
        onChangeType,
        onChangeView,
        view,
    } = useArticleFilters();

    return (
        <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Search')}
                />
            </Card>
            <ArticleTypeTabs value={type} onChangeType={onChangeType} />
        </div>
    );
};
