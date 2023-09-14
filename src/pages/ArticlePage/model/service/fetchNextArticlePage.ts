import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchArticlesList } from './fetchArticlesList';
import { getArticleHasMore, getArticleIsloading, getArticlePage } from '../selectors/getArticleSelectors';
import { articlePageActions } from '../slice/articlePageSlice';

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
                dispatch(fetchArticlesList({
                    page: page + 1,
                }));
            }
        },
    );
