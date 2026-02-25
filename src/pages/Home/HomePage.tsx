import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="wrapper">
      <h1>Блог о фронтенде</h1>
      <p>Добро пожаловать! Здесь собраны статьи о React, TypeScript и современной веб-разработке.</p>
      <Link to="/articles" className="cta-link">
        Перейти к статьям
      </Link>
    </div>
  );
}
