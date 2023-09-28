/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import AddCommentForm from 'features/AddCommentForm/ui/AddCommentForm';
import { Page } from 'widgets/Page/Page';
import { getArticleCommentsIsLoading } from '../../selectors/comments/comments';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { articleRecommendationsReducer, getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../../selectors/recommendations';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsBuArticleId/fetchCommentsBuArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
   className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const commetns = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const IsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useDispatch();

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Error Loading')}
            </div>
        );
    }

    const reducer:ReducersList = {
        articleDetailsComments: articleDetailsCommentsReducer,
        articleRedommendations: articleRecommendationsReducer,
    };

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <DynamicModuleLoader removeAfterUnmount reducers={reducer}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('Recomendations')}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendations}
                    // eslint-disable-next-line i18next/no-literal-string
                    target="_blank"
                />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('Coments')}
                />
                <AddCommentForm onSandComment={onSendComment} />
                <CommentList
                    isLoading={IsLoading}
                    comments={commetns}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
