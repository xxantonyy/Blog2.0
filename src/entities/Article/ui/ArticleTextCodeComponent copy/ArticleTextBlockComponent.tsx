import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleTextBlock } from '@/entities/Article/model/types/article';
import { Text } from '@/shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
   className?: string;
   block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const {
        className,
        block,
    } = props;
    const { t } = useTranslation();

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.tytle && (
                <Text title={block.tytle} className={cls.title} />
            )}
            {block.paragraphs.map((paragraph) => (
                // eslint-disable-next-line react/no-array-index-key
                <Text key={paragraph} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
});
