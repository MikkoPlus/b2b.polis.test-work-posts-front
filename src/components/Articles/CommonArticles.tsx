import type { IArticle } from "@/components/Article/articleTypes.ts";
import { CommonArticleCard } from "@/components/ArticleCard/CommonArticleCard";
import styles from "./CommonArticles.module.scss";

export const CommonArticles: React.FC<{ articles: IArticle[] }> = ({ articles }) => {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="wrapper">
      {articles && Array.isArray(articles) && articles.length > 0 ? (
        <div className={styles.articles}>
          <div className={styles.articles__heading}>
            <h1 className={styles.articles__title}>Список статей</h1>
            <span className={styles.articles__counter}>({articles.length})</span>
          </div>
          <ul className={styles.articlesList}>
            {articles.map((article) => (
              <CommonArticleCard key={article.id} article={article} />
            ))}
          </ul>
        </div>
      ) : (
        <h1>Статей нет</h1>
      )}
    </div>
  );
};
