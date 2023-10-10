import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleHasMore, getArticlePage, getArticleIsloading } from '../selectors/getArticleSelectors';
import { articlePageActions } from '../slice/articlePageSlice';
import { fetchArticlesList } from './fetchArticlesList';

export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/fetchNextArticlesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const hasMore = getArticleHasMore(getState());
            const page = getArticlePage(getState());
            const isLoading = getArticleIsloading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlePageActions.setPage(page + 1));
                dispatch(fetchArticlesList({}));
            }
        },
    );
