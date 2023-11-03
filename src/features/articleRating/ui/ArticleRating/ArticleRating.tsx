import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/RatingCard';
import { getUserAuthData } from '@/entities/User';
import { useGetArticleRating, useRateArticle } from '../api/ArticleRatingApi';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

export const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userId = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userId?.id ?? '',
    });

    const userData = useSelector(getUserAuthData);

    const [rateArticleMutation] = useRateArticle();

    const rating = data?.[0];

    const handleRatearticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    articleId,
                    rate: starsCount,
                    feedback,
                });
            } catch (error) {
                console.error(error);
            }
        },
        [articleId, rateArticleMutation, userData?.id],
    );

    const onCancel = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRatearticle(starsCount);
        },
        [handleRatearticle],
    );
    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRatearticle(starsCount, feedback);
        },
        [handleRatearticle],
    );

    if (isLoading) {
        return <Skeleton height={120} width="100%" />;
    }
    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('rate article')}
            feedBackTitle={t('feedback')}
            hasFeedback
        />
    );
});
