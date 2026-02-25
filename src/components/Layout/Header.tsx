import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link to="/" className={styles.header__logo} aria-label="На главную">
          <svg
            className={styles.header__logoIcon}
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="6" />
            <path d="M8 16h2.5c2 0 3.5-1.2 3.5-3s-1.5-3-3.5-3H8v6Zm2.4-3.5c.9 0 1.6-.5 1.6-1.5s-.7-1.5-1.6-1.5H9.5v3h.9Z" />
          </svg>
          <span className={styles.header__logoText}>B2B Blog</span>
        </Link>

        <nav className={styles.header__nav} aria-label="Основная навигация">
          <Link to="/articles" className={styles.header__link}>
            Статьи
          </Link>
          <Link
            to="/newArticle"
            className={`${styles.header__link} ${styles.header__link_primary}`}
          >
            Новая статья
          </Link>
        </nav>
      </div>
    </header>
  );
};

