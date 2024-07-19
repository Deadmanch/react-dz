export interface IReview {
	id: number;
	movieId: number;
	title?: string;
	type: string;
	review: string;
	date: string;
	author: string;
	userRating: number;
	reviewDislikes: number;
	reviewLikes: number;
	updatedAt: string;
	authorId: number;
}
