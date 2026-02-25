export interface IComment {
  id: number;
  articleId: number;
  authorName: string;
  content: string;
  createdAt: string;
}

export interface ICommentFormData {
  authorName: string;
  content: string;
}

export interface ICommentForm {
  onSubmit: (data: ICommentFormData) => void;
}
