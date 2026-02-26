import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className="wrapper">
      <section className={styles.home}>
        <h1 className={styles.home__title}>Добро пожаловать!</h1>
        <p className={styles.home__subtitle}>
          Это небольшое приложение для публикации статей. Вы можете оставить свой пост и добавить к нему комментарии, а также просмотреть
          записи других пользователей.
        </p>
        <div className={styles.home__actions}>
          <Link to="/articles" className={styles.home__link}>
            Список статей
          </Link>
          <Link to="/newArticle" className={`${styles.home__link} ${styles.home__link_primary}`}>
            Создать статью
          </Link>
        </div>
      </section>
    </div>
  );
};
