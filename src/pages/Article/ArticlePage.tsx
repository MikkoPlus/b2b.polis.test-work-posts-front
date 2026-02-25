import { useParams, Link, Navigate } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "@/api/articles";
import { formatDate } from "@/helpers/helperFuncions";

export function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const articleId = id ? Number(id) : NaN;
  const article = !Number.isNaN(articleId) ? getArticleById(articleId) : undefined;
  const comments = article ? getCommentsByArticleId(article.id) : [];

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <article className="wrapper">
      <Link to="/articles" className="back-link">
        К списку статей
      </Link>
      <h1>{article.title}</h1>
      <div className="meta">
        <span>{formatDate(article.created_at)}</span>
      </div>
      <div className="content">
        {article.content.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      {comments.length > 0 && (
        <section className="comments">
          <h2>Комментарии ({comments.length})</h2>
          <ul className="comments-list">
            {comments.map((comment) => (
              <li key={comment.id} className="comment">
                <div className="comment-author">{comment.author_name}</div>
                <div className="comment-date">{formatDate(comment.created_at)}</div>
                <p className="comment-content">{comment.content}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
