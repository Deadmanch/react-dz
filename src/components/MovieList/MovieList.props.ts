import { IMovie } from '@/interfaces/movie.interface';

export interface IMovieListProps {
	movies: IMovie[];
	isLoading?: boolean;
}
