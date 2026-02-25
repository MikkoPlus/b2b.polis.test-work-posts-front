import type { IArticle } from "@/components/Article/articleTypes.ts";
import type { IComment } from "@/components/Comment/commentTypes";
import articlesData from "../data/articles.json";
import commentsData from "../data/comments.json";

const articles: IArticle[] = articlesData as IArticle[];
const comments: IComment[] = commentsData as IComment[];

export function getAllArticles(): IArticle[] {
  return articles;
}

export function getArticleById(id: number): IArticle | null {
  return articles.find((a) => a.id === id) ?? null;
}

export function getCommentsByArticleId(articleId: number): IComment[] | null {
  return comments.filter((c) => c.article_id === articleId) ?? null;
}
