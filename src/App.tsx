import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/Home/HomePage";
import { ArticlesPage } from "@/pages/Articles/ArticlesPage";
import { ArticlePage } from "@/pages/Article/ArticlePage";
import { NewArticlePage } from "@/pages/NewArticle/NewArticlePage";
import { Header } from "@/components/Layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/newArticle" element={<NewArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
