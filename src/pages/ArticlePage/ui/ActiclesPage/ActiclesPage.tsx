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
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import {
    getArticView, getArticleIsloading,
} from '../../model/selectors/getArticleSelectors';
import { fetchNextArticlePage } from '../../model/service/fetchNextArticlePage';
import { initArticlesPage } from '../../model/service/initArticlesPage';
import { articlePageReducer, getArticles } from '../../model/slice/articlePageSlice';
import cls from './ActiclesPage.module.scss';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { ArticleInfinitePage } from '../ArticleInfinitePage/ArticleInfinitePage';

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

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ActiclesPage, {}, [className])}>
                <ArticlePageFilters />
                <ArticleInfinitePage />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ActiclesPage);
