import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { ArticleSordField, ArticleTypes } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlePageSchema extends EntityState<Article> {
   isLoading?: boolean;
   error?: string;

   // PAGINATION
   page: number;
   limit: number;
   hasMore: boolean;
   // FILTERS
   view: ArticleView;
   order: SortOrder;
   sort: ArticleSordField;
   search: string;
   type: ArticleTypes

   _inited: boolean;
}
