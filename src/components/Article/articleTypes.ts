import type { IComment } from "@/components/Comment/commentTypes";

export interface IArticle {
  id: number;
  title: string;
  content: string;
  created_at: string;
  author_name: string;
  preview?: string;
}

export interface IArticleDetail {
  article: IArticle;
  comments: IComment[] | null;
}
