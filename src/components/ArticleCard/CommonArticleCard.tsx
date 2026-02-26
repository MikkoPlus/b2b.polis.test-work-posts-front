import type { IArticle } from "@/components/Article/articleTypes";
import { formatDate } from "../../helpers/helperFuncions";
import styles from "./CommonArticleCard.module.scss";
import { Link } from "react-router-dom";

export const CommonArticleCard: React.FC<{ article: IArticle }> = ({ article }) => {
  return (
    <li className={styles.card}>
      <Link className={styles.card__link} to={`/articles/${article.id}`}>
        {article.preview ? (
          <img className={styles.card__preview} src={article.preview} alt={article.title ?? ""} />
        ) : (
          <img className={styles.card__preview} src="/preview.png" alt={article.title ?? ""} />
        )}
        <div className={styles.card__meta}>
          <span className={styles.card__author}>{article.author_name}</span>
          <span className={styles.card__date}>{formatDate(article.created_at)}</span>
        </div>
        <div className={styles.card__content}>
          <h4 className={styles.card__title}>{article.title}</h4>
          <p className={styles.card__txt}>{article.content.slice(0, 150)}...</p>
        </div>
        <span className={styles.card__follow}>Читать &#8594;</span>
      </Link>
    </li>
  );
};
