/* eslint-disable max-len */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets';
import { articleDetailsCommentsReducer } from '../../model/slices/articleDetailsCommentsSlice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { ToggleFeatures } from '@/shared/lib/future';
import { Card } from '@/shared/ui/deprecated/Card';
import { StickyContentLayout } from '@/shared/layout/StickyLayout';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t('Error Loading')}
            </div>
        );
    }
    const reducer: ReducersList = {
        articleDetailsComments: articleDetailsCommentsReducer,
    };

    return (

        <DynamicModuleLoader removeAfterUnmount reducers={reducer}>
            <ToggleFeatures
                feature="isAppRedisigned" on={(
                    <StickyContentLayout
                        content={(
                            <Page
                                className={classNames(cls.ArticleDetailsPage, {}, [className])}
                            >
                                <VStack gap="16" max>
                                    <DetailsContainer />
                                    <ArticleRating articleId={id} />
                                    <ArticleRecommendationsList />
                                    <ArticleDetailsComments id={id} />
                                </VStack>
                            </Page>
                        )}
                        right={<AdditionalInfoContainer />}
                    />

                )} off={(
                    <Page
                        className={classNames(cls.ArticleDetailsPage, {}, [className])}
                    >
                        <ArticleDetailsPageHeader />
                        <ArticleDetails id={id} />
                        <ToggleFeatures
                            feature="isArticleRatingEnabled"
                            on={<ArticleRating articleId={id} />}
                            off={<Card>{t('Cooming soon')}</Card>}
                        />
                        <ArticleRecommendationsList />
                        <ArticleDetailsComments id={id} />
                    </Page>
                )}
            />

        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
