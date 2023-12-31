import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/RatingCard';
import { getUserAuthData } from '@/entities/User';
import { useGetProfileRating, useRateProfile } from '../api/profileRatingApi';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ToggleFeatures } from '@/shared/lib/future';

interface ArticleProfileProps {
    className?: string;
    profileId: string;
}

export const ProfileRating = memo((props: ArticleProfileProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation();
    const userId = useSelector(getUserAuthData);

    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: userId?.id ?? '',
    });

    const userData = useSelector(getUserAuthData);

    const [rateArticleMutation] = useRateProfile();

    const rating = data?.[0];

    const handleRatearticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    profileId,
                    rate: starsCount,
                    feedback,
                });
            } catch (error) {
                console.error(error);
            }
        },
        [profileId, rateArticleMutation, userData?.id],
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
        return (
            <ToggleFeatures
                feature="isAppRedisigned"
                on={<Skeleton height={120} width="100%" border="42px" />}
                off={<SkeletonDeprecated height={120} width="100%" />}
            />
        );
    }
    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('rate profile')}
            feedbackTitle={t('feedback')}
            hasFeedback
        />
    );
});
