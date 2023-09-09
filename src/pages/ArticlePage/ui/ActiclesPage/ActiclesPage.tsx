/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import {
    Article, ArticleList, ArticleView, ArticleViewSelector,
} from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticError, getArticView, getArticleIsloading } from 'pages/ArticlePage/model/selectors/getArticleSelectors';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slice/articlePageSlice';
import { fetchArticlesList } from '../../model/service/fetchArticlesList';
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
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const ArticleError = useSelector(getArticError);
    const ArticleIsLoading = useSelector(getArticleIsloading);
    const ArticleIsView = useSelector(getArticView);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlePageActions.initState());
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ActiclesPage, {}, [className])}>
                <ArticleViewSelector view={ArticleIsView} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={ArticleIsLoading}
                    view={ArticleIsView}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>

    );
};

export default memo(ActiclesPage);
