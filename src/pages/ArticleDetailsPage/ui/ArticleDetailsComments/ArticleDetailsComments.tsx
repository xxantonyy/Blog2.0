/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { Suspense, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CommentList } from '@/entities/Comment';
import { Text, TextSize } from '@/shared/ui/Text';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Skeleton } from '@/shared/ui/Skeleton';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsBuArticleId/fetchCommentsBuArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../selectors/comments/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { AddCommentFormAsync as AddCommentForm } from '@/features/AddCommentForm';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo(
    (props: ArticleDetailsCommentsProps) => {
        const { className, id } = props;
        const { t } = useTranslation();

        const dispatch = useAppDispatch();
        const commetns = useSelector(getArticleComments.selectAll);
        const IsLoading = useSelector(getArticleCommentsIsLoading);

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
        });

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text));
            },
            [dispatch],
        );

        return (
            <div className={classNames('', {}, [className])}>
                <Text size={TextSize.L} className="" title={t('Coments')} />
                <Suspense
                    fallback={<Skeleton border="50" height={200} width={200} />}
                >
                    <AddCommentForm onSandComment={onSendComment} />
                </Suspense>
                <CommentList isLoading={IsLoading} comments={commetns} />
            </div>
        );
    },
);
