export interface Comment {
  commentId: number;
  ratings: number;
  text: string;
  date: string;
  sentimentId: number;
  userId: number;
  productId: number;
  commentCategoryId: number;
}

export interface ProductCommentsResponse {
  productId: number;
  productName: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  comments: Comment[]; 
}

export interface ApiResponse {
  data: ProductCommentsResponse[];
  status: string;
}

export interface CommentCategory {
  commentCategoryId: number;
  commentCategoryName: string;
}

export interface Comment {
  commentId: number;
  ratings: number;
  text: string;
  date: string;
  userName?: string;
}

export interface ProductCommentsFull {
  comments: Comment[];
  createdAt: string;
  endDate: string;
  productId: number;
  productName: string;
  startDate: string;
}

export interface CommentsResponse {
  status?: string;
  data: ProductCommentsFull[];
}
