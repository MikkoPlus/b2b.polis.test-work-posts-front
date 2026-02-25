import type { IComment } from "@/components/Comment/commentTypes";

export interface IArticle {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  authorName: string;
  preview?: {
    src: string;
    alt?: string;
  };
}

export interface IArticleDetail {
  article: IArticle;
  comments: IComment[] | null;
}
