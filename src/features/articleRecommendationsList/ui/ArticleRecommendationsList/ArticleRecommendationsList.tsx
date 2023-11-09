import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { ToggleFeatures } from '@/shared/lib/future';

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
                gap="8"
                className={classNames('', {}, [className])}
                data-testid="ArticleRecommendationsList"
            >
                <ToggleFeatures
                    feature="isAppRedisigned"
                    // eslint-disable-next-line i18next/no-literal-string
                    on={<Text size="l" title={t('Recomendations')} />}
                    off={<TextDeprecated size={TextSize.L} title={t('Recomendations')} />}
                />

                <ArticleList articles={data} target="_blank" />
            </VStack>
        );
    },
);
