import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleSordField, ArticleTypes, ArticleView,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types';

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
