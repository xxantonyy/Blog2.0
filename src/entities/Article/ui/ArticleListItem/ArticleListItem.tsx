/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import { HTMLAttributeAnchorTarget, memo } from 'react';
import {
    Article,
    ArticleView,
} from '../../model/types/article';
// import NoPhoto from '@/shared/assets/icons/no_photo.png';
import { ToggleFeatures } from '@/shared/lib/future';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}
export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className, article, view, target,
    } = props;

    const propses = {
        className, article, view, target,
    };

    return (
        <ToggleFeatures
            feature="isAppRedisigned"
            on={<ArticleListItemRedesigned {...propses} />}
            off={<ArticleListItemDeprecated {...propses} />}
        />
    );
});
