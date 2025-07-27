export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage?: string;
  description?: string;
  genre?: string;
  publicationYear?: number;
  rating?: number;
  isRead?: boolean;
  dateAdded: Date;
}