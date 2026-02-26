import { getAllArticles } from "@/api/fetch";
import { CommonArticles } from "@/components/Articles/CommonArticles";
import { useEffect, useState } from "react";

export const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Awaited<ReturnType<typeof getAllArticles>>>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllArticles();
        if (data) {
          setArticles(data);
        } else {
          setArticles([]);
        }
      } catch (e) {
        console.log(e);
        setArticles([]);
      }
    })();
  }, []);

  return <CommonArticles articles={articles} />;
};
