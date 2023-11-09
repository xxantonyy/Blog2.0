import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { ToggleFeatures } from '@/shared/lib/future';
import { CommentCard } from '../CommentCard/CommentCrard';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
    const { className, comments, isLoading } = props;

    const { t } = useTranslation();
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <VStack gap="16" className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    // eslint-disable-next-line max-len
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        className={cls.commentCard}
                        comment={comment}
                    />
                ))
            ) : (
                <ToggleFeatures
                    feature="isAppRedisigned"
                    on={<Text title={t('comments 0')} />}
                    off={<TextDeprecated title={t('comments 0')} />}
                />

            )}
        </VStack>
    );
};
