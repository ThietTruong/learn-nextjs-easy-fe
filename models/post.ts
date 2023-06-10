export interface Author {
  name: string;
  title: string;
  profileUrl: string;
  avatarUrl: string;
}
export interface IPost {
  id: number | string;
  title: string;
  publishedDay: string;
  tagList: string[];
  description: string;
  slug: string;
  author?: Author;
  thumbnailUrl: string;

  mdContent?: string;
  htmlContent?: string;
}
