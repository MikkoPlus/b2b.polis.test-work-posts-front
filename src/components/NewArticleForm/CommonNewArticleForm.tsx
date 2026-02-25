import { useState, type FormEvent, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import type { IArticle } from "@/components/Article/articleTypes";
import styles from "./CommonNewArticleForm.module.scss";
import type { NewArticleFormData } from "./newArticleFormTypes";

export const CommonNewArticleForm: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<NewArticleFormData>({
    title: "",
    authorName: "",
    content: "",
  });

  const handleChange = (field: keyof NewArticleFormData) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.authorName.trim() || !form.content.trim()) return;

    const draft: Omit<IArticle, "id" | "createdAt"> = {
      title: form.title.trim(),
      authorName: form.authorName.trim(),
      content: form.content.trim(),
    };

    console.log("Новая статья (черновик):", draft);
    navigate("/articles");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__field}>
        <label className={styles.form__label} htmlFor="article-title">
          Заголовок
        </label>
        <input
          id="article-title"
          className={styles.form__input}
          type="text"
          value={form.title}
          onChange={handleChange("title")}
          placeholder="Введите заголовок статьи"
          required
        />
      </div>

      <div className={styles.form__field}>
        <label className={styles.form__label} htmlFor="article-author">
          Автор
        </label>
        <input
          id="article-author"
          className={styles.form__input}
          type="text"
          value={form.authorName}
          onChange={handleChange("authorName")}
          placeholder="Введите имя автора"
          required
        />
      </div>

      <div className={styles.form__field}>
        <label className={styles.form__label} htmlFor="article-content">
          Текст статьи
        </label>
        <textarea
          id="article-content"
          className={styles.form__textarea}
          value={form.content}
          onChange={handleChange("content")}
          placeholder="Введите содержимое статьи"
          rows={8}
          required
        />
      </div>

      <div className={styles.form__actions}>
        <button className={styles.form__submit} type="submit">
          Создать статью
        </button>
      </div>
    </form>
  );
};
