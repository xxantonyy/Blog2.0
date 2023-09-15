/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, useCallback,
} from 'react';
import {
    ArticleList,
} from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticView, getArticleIsloading,
} from 'pages/ArticlePage/model/selectors/getArticleSelectors';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlePage } from 'pages/ArticlePage/model/service/fetchNextArticlePage';
import { initArticlesPage } from 'pages/ArticlePage/model/service/initArticlesPage';
import { useSearchParams } from 'react-router-dom';
import { articlePageReducer, getArticles } from '../../model/slice/articlePageSlice';
import cls from './ActiclesPage.module.scss';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';

interface ActiclesPageProps {
   className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ActiclesPage = (props: ActiclesPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const ArticleIsLoading = useSelector(getArticleIsloading);
    const ArticleIsView = useSelector(getArticView);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ActiclesPage, {}, [className])}>
                <ArticlePageFilters />
                <ArticleList
                    isLoading={ArticleIsLoading}
                    view={ArticleIsView}
                    articles={articles}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ActiclesPage);
