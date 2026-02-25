import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/Home/HomePage";
import { ArticlesPage } from "@/pages/Articles/ArticlesPage";
import { ArticlePage } from "@/pages/Article/ArticlePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
