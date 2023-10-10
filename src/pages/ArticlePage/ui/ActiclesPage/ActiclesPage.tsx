/* eslint-disable max-len */
import {
    memo, useCallback,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page/Page';
import { fetchNextArticlePage } from '../../model/service/fetchNextArticlePage';
import { articlePageReducer } from '../../model/slice/articlePageSlice';
import { ArticleInfinitePage } from '../ArticleInfinitePage/ArticleInfinitePage';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
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
