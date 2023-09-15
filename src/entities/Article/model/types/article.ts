import { User } from 'entities/User';

export enum ArticleSordField {
   VIEWS = 'views',
   TITLE = 'title',
   CREATED = 'created',
}

export enum ArticleBlockType {
   CODE = 'CODE',
   IMG = 'IMG',
   TEXT = 'TEXT'
}

export interface ArticleBlockBase {
   id: string;
   type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
   type: ArticleBlockType.CODE;
   code: string;
}
export interface ArticleImageBlock extends ArticleBlockBase {
   type: ArticleBlockType.IMG;
   src: string;
   tytle: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
   type: ArticleBlockType.TEXT;
   tytle?: string;
   paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum ArticleTypes {
   ALL = 'ALL',
   IT = 'IT',
   SCIENCE = 'SCIENCE',
   ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
   BIG = 'BIG',
   SMALL = 'SMALL',
}

export interface Article {
      id: string;
      title: string;
      subtitle: string;
      user: User;
      img: string;
      views:number;
      createdAt: string;
      type: ArticleTypes[];
      blocks: ArticleBlock[];
}
