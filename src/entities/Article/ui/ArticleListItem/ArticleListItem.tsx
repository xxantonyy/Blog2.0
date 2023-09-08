/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from 'entities/Article/model/types/article';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextCodeComponent copy/ArticleTextBlockComponent';

interface ArticleListItemProps {
   className?: string;
   article: Article
   view: ArticleView,
}
export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
    } = props;
    const { t } = useTranslation();
    const navigation = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigation(RoutePath.articles_details + article.id);
    }, [article.id, navigation]);

    if (view === ArticleView.BIG) {
        const textBlocks = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.createdat} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    <Text text={article.type.join(', ')} className={cls.types} />
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {textBlocks && (
                        <ArticleTextBlockComponent block={textBlocks} className={cls.textblock} />
                    )}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                            {t('Reed more')}
                        </Button>
                        <Text text={String(article.views)} className={cls.views} />
                        <Icon Svg={EyeIcon} />
                    </div>

                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.img} className={cls.img} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text text={article.type.join(', ')} className={cls.types} />
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={EyeIcon} />
                </div>
                <Text text={article.title} />
            </Card>
        </div>
    );
});
