/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, useCallback,
} from 'react';
import {
    ArticleList, ArticleView, ArticleViewSelector,
} from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticView, getArticleIsloading,
} from 'pages/ArticlePage/model/selectors/getArticleSelectors';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlePage } from 'pages/ArticlePage/model/service/fetchNextArticlePage';
import { initArticlesPage } from 'pages/ArticlePage/model/service/initArticlesPage';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slice/articlePageSlice';
import cls from './ActiclesPage.module.scss';

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

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage);
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ActiclesPage, {}, [className])}>
                <ArticleViewSelector view={ArticleIsView} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={ArticleIsLoading}
                    view={ArticleIsView}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ActiclesPage);
