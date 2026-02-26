import { useState, type FormEvent, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CommonNewArticleForm.module.scss";
import type { IArticleFormData } from "./newArticleFormTypes";
import { postArticle } from "@/api/fetch";

export const CommonNewArticleForm: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<IArticleFormData>({
    title: "",
    author_name: "",
    content: "",
  });

  const handleChange = (field: keyof IArticleFormData) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.author_name.trim() || !form.content.trim()) return;

    const draft: IArticleFormData = {
      title: form.title.trim(),
      author_name: form.author_name.trim(),
      content: form.content.trim(),
    };

    try {
      await postArticle(draft).then((data) => {
        if (data && data.id) {
          navigate("/articles/" + data.id);
        } else {
          navigate("/articles");
        }
      });
    } catch (e) {
      console.log(e);
    }
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
          value={form.author_name}
          onChange={handleChange("author_name")}
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
