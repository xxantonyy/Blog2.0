import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import cls from './CommentList.module.scss';
import { CommentCrard } from '../CommentCard/CommentCrard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
   className?: string;
   comments?: Comment[];
   isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;

    const { t } = useTranslation();
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    // eslint-disable-next-line max-len
                    <CommentCrard key={comment.id} isLoading={isLoading} className={cls.commentCard} comment={comment} />
                ))
                : <Text title={t('comments 0')} />}
        </div>
    );
};
