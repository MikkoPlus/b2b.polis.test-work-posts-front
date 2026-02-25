import { useParams, Navigate } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "@/api/articles";
import { CommonArticle } from "@/components/Article/CommonArticle";

export const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const articleId = id ? Number(id) : NaN;
  const article = !Number.isNaN(articleId) ? getArticleById(articleId) : null;

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const comments = getCommentsByArticleId(article.id);

  return <CommonArticle article={article} comments={comments} />;
};
