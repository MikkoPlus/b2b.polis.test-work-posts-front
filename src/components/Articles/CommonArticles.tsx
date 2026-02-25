import type { IArticle } from "@/components/Article/articleTypes.ts";
import { CommonArticleCard } from "@/components/ArticleCard/CommonArticleCard";
import styles from "./CommonArticles.module.scss";

export const CommonArticles: React.FC<{ articles: IArticle[] }> = ({ articles }) => {
  if (!articles || articles.length === 0) return null;

  return (
    <ul className={styles.articlesList}>
      {articles.map((article) => (
        <CommonArticleCard key={article.id} article={article} />
      ))}
    </ul>
  );
};
