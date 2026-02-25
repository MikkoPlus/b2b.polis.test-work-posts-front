export interface ArticleCard {
  id: number;
  title: string;
  content: string;
  created_at: string;
  preview?: {
    src: string;
    alt?: string;
  };
}
