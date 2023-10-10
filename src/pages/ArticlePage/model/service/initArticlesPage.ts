import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSordField } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { getArticleInited } from '../selectors/getArticleSelectors';
import { articlePageActions } from '../slice/articlePageSlice';
import { fetchArticlesList } from './fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articlePage/initArticlesPage',
        async (URLSearchParams, thunkApi) => {
            const {
                getState, dispatch,
            } = thunkApi;

            const inited = getArticleInited(getState());

            if (!inited) {
                const orderFormURL = URLSearchParams.get('order') as SortOrder;
                const sortFormURL = URLSearchParams.get('sort') as ArticleSordField;
                const searchFormURL = URLSearchParams.get('search');

                if (orderFormURL) {
                    dispatch(articlePageActions.setOrder(orderFormURL));
                }

                if (sortFormURL) {
                    dispatch(articlePageActions.setSort(sortFormURL));
                }

                if (searchFormURL) {
                    dispatch(articlePageActions.setSearch(searchFormURL));
                }

                dispatch(articlePageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
