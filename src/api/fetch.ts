import type { IArticle, IArticleDetail } from "@/components/Article/articleTypes.ts";
import type { IComment, ICommentFormData } from "@/components/Comment/commentTypes";
import type { IArticleFormData } from "@/components/NewArticleForm/newArticleFormTypes";

export async function getAllArticles(): Promise<IArticle[]> {
  const response = await fetch(`/api/articles`).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch all articles: ${response.statusText}`);
    }
    return response;
  });
  return response.json().then((data: IArticle[]) => data);
}

export async function getArticleById(id: number): Promise<IArticleDetail> {
  const response = await fetch(`/api/articles/${id}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch article: ${response.statusText}`);
    }
    return response;
  });
  return response.json().then((data: IArticleDetail) => data);
}

export async function postArticle(data: IArticleFormData): Promise<IArticle> {
  const response = await fetch(`/api/articles/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to post new article: ${response.statusText}`);
    }
    return response;
  });
  return response.json().then((data: IArticle) => data);
}

export async function postComment(id: number, data: ICommentFormData): Promise<IComment> {
  const response = await fetch(`/api/articles/${id}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to post new comment: ${response.statusText}`);
    }
    return response;
  });
  return response.json().then((data: IComment) => data);
}
