import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/future';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    (props: ArticleImageBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            // eslint-disable-next-line i18next/no-literal-string
            <div
                className={classNames(cls.ArticleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img src={block.src} className={cls.image} alt="" />
                {block.tytle && (
                    <ToggleFeatures
                        feature="isAppRedisigned"
                        on={(
                            <Text text={block.tytle} align={TextAlign.CENTER} />
                        )}
                        off={(
                            <TextDeprecated text={block.tytle} align={TextAlign.CENTER} />
                        )}
                    />

                )}
            </div>
        );
    },
);
