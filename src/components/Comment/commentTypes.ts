export interface IComment {
  id: number;
  article_id: number;
  author_name: string;
  content: string;
  created_at: string;
}

export interface ICommentFormData {
  author_name: string;
  content: string;
}

export interface ICommentForm {
  onSubmit: (data: ICommentFormData) => void;
}
