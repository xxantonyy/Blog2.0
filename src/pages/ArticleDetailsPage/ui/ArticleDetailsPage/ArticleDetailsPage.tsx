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
        // eslint-disable-next-line i18next/no-literal-string
        <DynamicModuleLoader removeAfterUnmount reducers={reducer}>
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRating articleId={id} />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
