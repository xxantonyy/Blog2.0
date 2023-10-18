export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export type { ArticleTextBlock } from '@/entities/Article/model/types/article';

export { ArticleTypes } from './model/types/article';

export { articleDetailsReducer } from './model/slice/articleDetailsSlice';
export { articleDetailsActions } from './model/slice/articleDetailsSlice';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type { Article } from './model/types/article';
export { ArticleView } from './model/types/article';
export { ArticleSordField } from './model/types/article';

export { ArticleList } from './ui/ArticleList/ArticleList';

export { getArticleDetaislData } from './model/selectors/articleDetails';
