import { useState } from "react";
import { formatDate } from "@/helpers/helperFuncions";
import { Link } from "react-router-dom";
import type { IArticleDetail } from "./articleTypes";
import type { IComment } from "../Comment/commentTypes";
import { CommonComment } from "../Comment/CommonComment";
import { CommonCommentForm } from "../Comment/CommonCommentForm";
import styles from "./CommonArticle.module.scss";

export const CommonArticle: React.FC<IArticleDetail> = ({ article, comments: initialComments }) => {
  const [comments, setComments] = useState<IComment[]>(initialComments ?? []);

  const handleAddComment = (data: { authorName: string; content: string }) => {
    const newComment: IComment = {
      id: Date.now(),
      articleId: article.id,
      authorName: data.authorName,
      content: data.content,
      createdAt: new Date().toISOString(),
    };
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <article className={styles.article}>
      <Link to="/articles" className={styles.article__backLink}>
        К списку статей
      </Link>
      <h1 className={styles.article__title}>{article.title}</h1>
      <span className={styles.article__date}>{formatDate(article.createdAt)}</span>

      {article.preview && article.preview.src && (
        <img className={styles.card__preview} src={article.preview.src} alt={article.preview.alt ?? ""} />
      )}

      <div className={styles.article__content}>
        {article.content.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <section className={styles.article__comments}>
        <h2 className={styles.article__commentsTitle}>Комментарии ({comments.length})</h2>
        {comments.length > 0 ? (
          <ul className={styles.article__commentsList}>
            {comments.map((comment) => (
              <CommonComment key={comment.id} {...comment} />
            ))}
          </ul>
        ) : (
          <p className={styles.article__emptyComments}>Комментариев ещё нет</p>
        )}
        <div className={styles.article__form}>
          <h3 className={styles.article__commentsSubtitle}>Вы можете оставить свой комментарий к посту</h3>
          <CommonCommentForm onSubmit={handleAddComment} />
        </div>
      </section>
    </article>
  );
};
