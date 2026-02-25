import { CommonNewArticleForm } from "@/components/NewArticleForm/CommonNewArticleForm";
import styles from "./NewArticlePage.module.scss";

export const NewArticlePage = () => {
  return (
    <div className="wrapper">
      <section className={styles.newArticle}>
        <h1 className={styles.newArticle__title}>Новая статья</h1>
        <CommonNewArticleForm />
      </section>
    </div>
  );
};
