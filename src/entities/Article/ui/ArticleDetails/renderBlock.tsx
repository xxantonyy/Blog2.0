import cls from './ArticleDetails.module.scss';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextCodeComponent copy/ArticleTextBlockComponent';

export const renderArticleBlock = (block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
        return (
            <ArticleCodeBlockComponent
                key={block.id}
                block={block}
                className={cls.block}
            />
        );
    case ArticleBlockType.IMG:
        return (
            <ArticleImageBlockComponent
                key={block.id}
                block={block}
                className={cls.block}
            />
        );
    case ArticleBlockType.TEXT:
        return (
            <ArticleTextBlockComponent
                key={block.id}
                className={cls.block}
                block={block}
            />
        );
    default:
        return null;
    }
};
