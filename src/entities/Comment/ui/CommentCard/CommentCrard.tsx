import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { ids } from 'webpack';
import { Comment } from '../../model/types/comment';
import cls from './CommentCrard.module.scss';

interface CommentCrardProps {
   className?: string;
   comment : Comment;
   isLoading?: boolean;
}

export const CommentCrard = (props: CommentCrardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames('', {}, [className])}>
                <div>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} />
                </div>
                <Skeleton width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCrard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user.avatar ? <Avatar className={cls.avatar} size={30} src={comment.user.avatar} /> : null}
                <Text className={cls.username} text={comment.user.username} />
            </AppLink>
            <Text className={cls.commentText} text={comment.text} />
        </div>
    );
};
