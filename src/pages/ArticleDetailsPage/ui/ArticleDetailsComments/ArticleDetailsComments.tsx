/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { Suspense, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CommentList } from '@/entities/Comment';
import AddCommentForm from '@/features/AddCommentForm/ui/AddCommentForm';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsBuArticleId/fetchCommentsBuArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../selectors/comments/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsCommentsProps {
   className?: string;
   id?: string
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const {
        className,
        id,
    } = props;
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const commetns = useSelector(getArticleComments.selectAll);
    const IsLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <div className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                className=""
                title={t('Coments')}
            />
            <Suspense fallback={<Skeleton border="50" height={200} width={200} />}>
                <AddCommentForm onSandComment={onSendComment} />
            </Suspense>
            <CommentList
                isLoading={IsLoading}
                comments={commetns}
            />
        </div>
    );
});
