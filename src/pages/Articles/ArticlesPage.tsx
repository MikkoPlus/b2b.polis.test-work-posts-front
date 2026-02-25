import { getAllArticles } from "@/api/articles";
import { CommonArticles } from "@/components/Articles/CommonArticles";
import type { ArticleCard } from "@/components/ArticleCard/articleCardTypes";
import styles from "./ArticlesPage.module.scss";

export function ArticlesPage() {
  const articles: ArticleCard[] = getAllArticles();

  return (
    <div className="wrapper">
      {articles && Array.isArray(articles) && articles.length > 0 ? (
        <div className={styles.articles}>
          <div className={styles.articles__heading}>
            <h1 className={styles.articles__title}>Список статей</h1>
            <span className={styles.articles__counter}>({articles.length})</span>
          </div>
          <CommonArticles articles={articles} />
        </div>
      ) : (
        <h1>Статей нет</h1>
      )}
    </div>
  );
}
