import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getArticleHasMore, getArticleIsloading, getArticleLimit, getArticlePage,
} from '../selectors/getArticleSelectors';
import { fetchArticlesList } from './fetchArticlesList';
import { articlePageActions } from '../slice/articlePageSlice';

interface fetchNextArticlePageProps {
   page?: number;
}

export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articleDetails/fetchNextArticlePage',
        async (_, thunkApi) => {
            const {
                getState, dispatch,
            } = thunkApi;
            const hasMore = getArticleHasMore(getState());
            const page = getArticlePage(getState());
            const isLoading = getArticleIsloading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlePageActions.setPage(page + 1));
                dispatch(fetchArticlesList({
                    page: page + 1,
                }));
            }
        },
    );
