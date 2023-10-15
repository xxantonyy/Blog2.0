import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleTypes } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams';
import {
    getArticOrder, getArticleLimit, getArticlePage, getArticleSearch, getArticleSort, getArticleType,
} from '../selectors/getArticleSelectors';

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
    >(
        'articlesPage/fetchArticlesList',
        async (props, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const limit = getArticleLimit(getState());
            const sort = getArticleSort(getState());
            const order = getArticOrder(getState());
            const search = getArticleSearch(getState());
            const page = getArticlePage(getState());
            const type = getArticleType(getState());

            try {
                addQueryParams({
                    sort, order, search, type,
                });
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search,
                        type: type === ArticleTypes.ALL ? undefined : type,

                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
