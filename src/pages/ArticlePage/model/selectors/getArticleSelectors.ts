import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSordField, ArticleTypes, ArticleView } from '@/entities/Article';

const getArticleIsloading = (state: StateSchema) => state.articlesPage?.isLoading || false;
const getArticError = (state: StateSchema) => state.articlesPage?.error;
const getArticView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
const getArticlePage = (state: StateSchema) => state.articlesPage?.page || 1;
const getArticleLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
const getArticleHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
const getArticleInited = (state: StateSchema) => state.articlesPage?._inited;
const getArticOrder = (state: StateSchema) => state.articlesPage?.order || 'asc';
const getArticleSort = (state: StateSchema) => state.articlesPage?.sort || ArticleSordField.CREATED;
const getArticleSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
const getArticleType = (state: StateSchema) => state.articlesPage?.type ?? ArticleTypes.ALL;

export {
    getArticleIsloading,
    getArticError,
    getArticView,
    getArticlePage,
    getArticleLimit,
    getArticleHasMore,
    getArticleInited,
    getArticOrder,
    getArticleSort,
    getArticleSearch,
    getArticleType,
};
