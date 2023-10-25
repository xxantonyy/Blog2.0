import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text, TextSize } from '@/shared/ui/Text';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const { data, isLoading, error } = useArticleRecommendationsList(3);

        if (isLoading || error || !data) {
            return null;
        }

        return (
            <VStack
                gap="gap8"
                className={classNames('', {}, [className])}
                data-testid="ArticleRecommendationsList"
            >
                <Text size={TextSize.L} title={t('Recomendations')} />
                <ArticleList articles={data} target="_blank" />
            </VStack>
        );
    },
);
