import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleTextBlock } from '@/entities/Article';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ToggleFeatures } from '@/shared/lib/future';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            // eslint-disable-next-line i18next/no-literal-string
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.tytle && (
                    <ToggleFeatures
                        feature="isAppRedisigned"
                        on={(
                            <Text
                                title={block.tytle}
                                className={cls.title}
                            />
                        )}
                        off={(
                            <TextDeprecated
                                title={block.tytle}
                                className={cls.title}
                            />
                        )}
                    />

                )}
                {block.paragraphs.map((paragraph) => (
                    <ToggleFeatures
                        feature="isAppRedisigned"
                        on={(
                            <Text
                                key={paragraph}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        )}
                        off={(
                            <TextDeprecated
                                key={paragraph}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        )}
                    />

                ))}
            </div>
        );
    },
);
