import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Comment } from '../../model/types/comment';
import cls from './CommentCrard.module.scss';
import { getRouteProfile } from '@/shared/const/router';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/deprecated/Stack';

interface CommentCrardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCrard = (props: CommentCrardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div
                data-testid="CommentCard.Loading"
                className={classNames('', {}, [className])}
            >
                <div>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} />
                </div>
                <Skeleton width="100%" height={50} />
            </div>
        );
    }

    return (
        <VStack
            data-testid="CommentCard.Content"
            gap="8"
            max
            className={classNames(cls.CommentCrard, {}, [className])}
        >
            <AppLink
                to={getRouteProfile(comment.user.id)}
                className={cls.header}
            >
                {comment.user.avatar ? (
                    <Avatar
                        className={cls.avatar}
                        size={30}
                        src={comment.user.avatar}
                    />
                ) : null}
                <Text className={cls.username} text={comment.user.username} />
            </AppLink>
            <Text className={cls.commentText} text={comment.text} />
        </VStack>
    );
};
