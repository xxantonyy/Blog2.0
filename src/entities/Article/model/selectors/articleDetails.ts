import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetaislData = (state: StateSchema) => state.articleDetails?.data;
export const getArticleDetaislIsLoading = (state: StateSchema) => state.articleDetails?.isLoading;
export const getArticleDetaislError = (state: StateSchema) => state.articleDetails?.error;
