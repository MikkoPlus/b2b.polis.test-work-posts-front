import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className="wrapper">
      <section className={styles.home}>
        <h1 className={styles.home__title}>Блог о фронтенде</h1>
        <p className={styles.home__subtitle}>
          Добро пожаловать! Здесь собраны статьи о React, TypeScript и современной веб‑разработке.
        </p>
        <div className={styles.home__actions}>
          <Link to="/articles" className={styles.home__link}>
            Список статей
          </Link>
          <Link
            to="/newArticle"
            className={`${styles.home__link} ${styles.home__link_primary}`}
          >
            Создать статью
          </Link>
        </div>
      </section>
    </div>
  );
};
