import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => state.articleRedommendations?.isLoading;
export const getArticleRecommendationsError = (state: StateSchema) => state.articleRedommendations?.error;
