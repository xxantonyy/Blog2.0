import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

const getArticleIsloading = (state: StateSchema) => state.articlesPage?.isLoading || false;
const getArticError = (state: StateSchema) => state.articlesPage?.error;
const getArticView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;

export {
    getArticleIsloading,
    getArticError,
    getArticView,
};
