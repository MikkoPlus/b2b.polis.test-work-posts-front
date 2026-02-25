import type { ArticleCard } from "../ArticleCard/articleCardTypes";
import { CommonArticleCard } from "../ArticleCard/CommonArticleCard";
import styles from "./CommonArticles.module.scss";

export const CommonArticles: React.FC<{ articles: ArticleCard[] }> = ({ articles }) => {
  if (!articles || articles.length === 0) return null;

  return (
    <ul className={styles.articlesList}>
      {articles.map((article) => (
        <CommonArticleCard key={article.id} article={article} />
      ))}
    </ul>
  );
};
