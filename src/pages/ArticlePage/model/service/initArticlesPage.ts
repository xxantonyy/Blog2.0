import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticleInited,
} from '../selectors/getArticleSelectors';
import { fetchArticlesList } from './fetchArticlesList';
import { articlePageActions } from '../slice/articlePageSlice';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articleDetails/initArticlesPage',
        async (_, thunkApi) => {
            const {
                getState, dispatch,
            } = thunkApi;

            const inited = getArticleInited(getState());
            console.log(inited);

            if (!inited) {
                dispatch(articlePageActions.initState());
                dispatch(fetchArticlesList({
                    page: 1,
                }));
            }
        },
    );
