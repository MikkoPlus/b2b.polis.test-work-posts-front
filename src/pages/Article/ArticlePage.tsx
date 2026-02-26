import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getArticleById } from "@/api/fetch";
import { CommonArticle } from "@/components/Article/CommonArticle";
import type { IArticle } from "@/components/Article/articleTypes";
import type { IComment } from "@/components/Comment/commentTypes";

export const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const articleId = id ? Number(id) : NaN;

  const [article, setArticle] = useState<IArticle | null>(null);
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (Number.isNaN(articleId)) return;

    setLoading(true);
    setNotFound(false);

    (async () => {
      try {
        const data = await getArticleById(articleId);

        if (!data || !data.article) {
          setNotFound(true);
          return;
        }

        setArticle(data.article);
        setComments(data.comments ?? []);
      } catch (e) {
        console.error(e);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [articleId]);

  if (Number.isNaN(articleId)) {
    return <Navigate to="/articles" replace />;
  }

  if (loading) {
    return (
      <div className="loaderWrapper">
        <div className="loader" />
      </div>
    );
  }

  if (notFound || !article) {
    return <Navigate to="/articles" replace />;
  }

  return <CommonArticle article={article} comments={comments} />;
};
