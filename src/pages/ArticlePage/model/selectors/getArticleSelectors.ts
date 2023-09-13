import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

const getArticleIsloading = (state: StateSchema) => state.articlesPage?.isLoading || false;
const getArticError = (state: StateSchema) => state.articlesPage?.error;
const getArticView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
const getArticlePage = (state: StateSchema) => state.articlesPage?.page || 1;
const getArticleLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
const getArticleHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
const getArticleInited = (state: StateSchema) => state.articlesPage?._inited;

export {
    getArticleIsloading,
    getArticError,
    getArticView,
    getArticlePage,
    getArticleLimit,
    getArticleHasMore,
    getArticleInited,
};
