import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ArticleList } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { getArticleIsloading, getArticView } from '../../model/selectors/getArticleSelectors';
import { initArticlesPage } from '../../model/service/initArticlesPage';
import { getArticles } from '../../model/slice/articlePageSlice';

interface ArticleInfinitePageProps {
   className?: string;
}

export const ArticleInfinitePage = memo((props: ArticleInfinitePageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const ArticleIsLoading = useSelector(getArticleIsloading);
    const ArticleIsView = useSelector(getArticView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <ArticleList
            isLoading={ArticleIsLoading}
            view={ArticleIsView}
            articles={articles}
            className={className}
        />
    );
});
