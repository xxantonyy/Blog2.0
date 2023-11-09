/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { Suspense, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CommentList } from '@/entities/Comment';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsBuArticleId/fetchCommentsBuArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../selectors/comments/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { AddCommentFormAsync as AddCommentForm } from '@/features/AddCommentForm';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ToggleFeatures } from '@/shared/lib/future';
import cls from './ArticleDetailsComments.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';

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
            <VStack max className={classNames('123', {}, [className])}>
                <ToggleFeatures
                    feature="isAppRedisigned"
                    on={<Text className={cls.text} size="l" title={t('Coments')} />}
                    off={<TextDeprecated size={TextSize.L} className="" title={t('Coments')} />}
                />
                <Suspense
                    fallback={<Skeleton border="50" height={200} width={200} />}
                >
                    <AddCommentForm onSandComment={onSendComment} />
                </Suspense>
                <CommentList isLoading={IsLoading} comments={commetns} />
            </VStack>
        );
    },
);
