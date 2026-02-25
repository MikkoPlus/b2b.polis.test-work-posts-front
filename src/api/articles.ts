import type { Article } from '../types/article';
import type { Comment } from '../types/article';
import articlesData from '../data/articles.json';
import commentsData from '../data/comments.json';

const articles: Article[] = articlesData as Article[];
const comments: Comment[] = commentsData as Comment[];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleById(id: number): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function getCommentsByArticleId(articleId: number): Comment[] {
  return comments.filter((c) => c.article_id === articleId);
}
