/* eslint-disable max-len */
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets';
import { fetchNextArticlePage } from '../../model/service/fetchNextArticlePage';
import { articlePageReducer } from '../../model/slice/articlePageSlice';
import { ArticleInfinitePage } from '../ArticleInfinitePage/ArticleInfinitePage';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import cls from './ActiclesPage.module.scss';
import { Articleagereeting } from '@/features/articleagereeting';
import { ToggleFeatures } from '@/shared/lib/future';
import { StickyContentLayout } from '@/shared/layout/StickyLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainter/FiltersContainer';

interface ActiclesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ActiclesPage = (props: ActiclesPageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    const content = (
        <ToggleFeatures
            feature="isAppRedisigned" on={(
                <StickyContentLayout
                    left={<ViewSelectorContainer />}
                    right={<FiltersContainer />}
                    content={(
                        <Page
                            data-testid="ArticlesPage"
                            onScrollEnd={onLoadNextPart}
                            className={classNames(cls.ActiclesPageRedesigned, {}, [className])}
                        >
                            <ArticleInfinitePage />
                            <Articleagereeting />
                        </Page>
                    )}
                />

            )} off={(
                <Page
                    data-testid="ArticlesPage"
                    onScrollEnd={onLoadNextPart}
                    className={classNames(cls.ActiclesPage, {}, [className])}
                >
                    <ArticlePageFilters />
                    <ArticleInfinitePage />
                    <Articleagereeting />
                </Page>
            )}
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ActiclesPage);
