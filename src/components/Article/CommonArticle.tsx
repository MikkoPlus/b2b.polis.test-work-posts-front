import { useState } from "react";
import { formatDate } from "@/helpers/helperFuncions";
import { Link } from "react-router-dom";
import type { IArticleDetail } from "./articleTypes";
import type { IComment, ICommentFormData } from "../Comment/commentTypes";
import { CommonComment } from "../Comment/CommonComment";
import { CommonCommentForm } from "../Comment/CommonCommentForm";
import styles from "./CommonArticle.module.scss";
import { postComment } from "@/api/fetch";

export const CommonArticle: React.FC<IArticleDetail> = ({ article, comments: initialComments }) => {
  const [comments, setComments] = useState<IComment[]>(initialComments ?? []);

  const handleAddComment = async (data: ICommentFormData) => {
    const newComment: ICommentFormData = {
      author_name: data.author_name,
      content: data.content,
    };

    try {
      const response = await postComment(article.id, newComment);

      if (response) {
        setComments((prev) => [...prev, response]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <article className={styles.article}>
      <Link to="/articles" className={styles.article__backLink}>
        К списку статей
      </Link>
      <h1 className={styles.article__title}>{article.title}</h1>
      <div className={styles.article__meta}>
        <span className={styles.article__date}>{formatDate(article.created_at)}</span>
        <span className={styles.article__author}>{article.author_name}</span>
      </div>

      {article.preview ? (
        <img className={styles.article__preview} src={article.preview} alt={article.title ?? ""} />
      ) : (
        <img className={styles.article__preview} src="/preview.png" alt={article.title ?? ""} />
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
