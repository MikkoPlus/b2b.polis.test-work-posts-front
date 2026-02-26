import { useState, type FormEvent } from "react";
import styles from "./CommonComment.module.scss";
import type { ICommentForm } from "./commentTypes.ts";

export const CommonCommentForm: React.FC<ICommentForm> = ({ onSubmit }) => {
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !content.trim()) return;

    onSubmit({ author_name: authorName.trim(), content: content.trim() });
    setAuthorName("");
    setContent("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__field}>
        <label className={styles.form__label} htmlFor="comment-author">
          Ваше имя
        </label>
        <input
          className={styles.form__input}
          id="comment-author"
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Введите имя"
          required
        />
      </div>
      <div className={styles.form__field}>
        <label className={styles.form__label} htmlFor="comment-content">
          Комментарий
        </label>
        <textarea
          className={styles.form__textarea}
          id="comment-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Введите комментарий"
          rows={4}
          required
        />
      </div>
      <button className={styles.form__submit} type="submit">
        Отправить
      </button>
    </form>
  );
};
