import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleSordField, ArticleView, ArticleViewSelector } from 'entities/Article';
import { articlePageActions } from 'pages/ArticlePage/model/slice/articlePageSlice';
import { useCallback, useMemo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getArticOrder, getArticView, getArticleSearch, getArticleSort, getArticleType,
} from 'pages/ArticlePage/model/selectors/getArticleSelectors';
import { useSelector } from 'react-redux';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/ArticlePage/model/service/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleTypes } from 'entities/Article/model/types/article';
import { ArticleTabs } from 'entities/Article/ui/ArticleTabs/ArticleTabs';
import cls from './ArticlePageFilters.module.scss';

interface ArticlePageFiltersProps {
   className?: string;
}

export const ArticlePageFilters = (props: ArticlePageFiltersProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const ArticleIsView = useSelector(getArticView);
    const sort = useSelector(getArticleSort);
    const order = useSelector(getArticOrder);
    const search = useSelector(getArticleSearch);
    const type = useSelector(getArticleType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSort = useCallback((newSort: ArticleSordField) => {
        dispatch(articlePageActions.setSort(newSort));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlePageActions.setOrder(newOrder));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlePageActions.setSearch(search));
        dispatch(articlePageActions.setPage(1));
        debounceFetchData();
    }, [debounceFetchData, dispatch]);

    const onTabClick = useCallback((type: ArticleTypes) => {
        dispatch(articlePageActions.setType(type));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={ArticleIsView} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input value={search} onChange={onChangeSearch} placeholder={t('Search')} />
            </Card>
            <ArticleTabs
                value={type}
                onChangeType={onTabClick}
            />
        </div>
    );
};
