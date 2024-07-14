import { useState, useCallback, useEffect } from 'react';

import { fetchApi } from '@/helpers/appClient';
import { IMovie } from '@/interfaces/movie.interface';
import { IReview } from '@/interfaces/review.interface';

interface IMovieResponse {
	docs: IMovie[];
}
interface IReviewResponse {
	docs: IReview[];
}

const requestRandomMovie = async (): Promise<IMovie | null> => {
	return await fetchApi<IMovie>({
		endpoint: '/movie/random',
		params: {
			notNullFields: ['name', 'poster.url', 'description']
		}
	});
};

const requestMovies = async (name: string): Promise<IMovie[]> => {
	const data = await fetchApi<IMovieResponse>({
		endpoint: '/movie/search',
		params: {
			page: 1,
			limit: 8,
			query: name
		}
	});
	console.log(data);
	return data?.docs || [];
};

const requestReview = async (movieId: string): Promise<IReview[]> => {
	const data = await fetchApi<IReviewResponse>({
		endpoint: '/review',
		params: {
			limit: 1,
			movieId: movieId,
			page: 1
		}
	});

	return data?.docs || [];
};

export const useApi = () => {
	const [movies, setMovies] = useState<IMovie[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [review, setReview] = useState<IReview | null>(null);

	const fetchMovies = useCallback(async (name: string) => {
		setLoading(true);
		const data = await requestMovies(name);
		setMovies(data);
		setLoading(false);
	}, []);
	const fetchReview = useCallback(async (movieId: string) => {
		setLoading(true);
		const data = await requestReview(movieId);
		setReview(data[0]);
		setLoading(false);
	}, []);

	const fetchRandomMovies = useCallback(async () => {
		setLoading(true);
		const requests = Array.from({ length: 8 }, () => requestRandomMovie());
		const data = await Promise.all(requests);
		const filteredData = data.filter((movie): movie is IMovie => movie !== null);
		setMovies(filteredData);
		setLoading(false);
	}, []);

	useEffect(() => {
		fetchRandomMovies();
	}, [fetchRandomMovies]);

	return { movies, findMovies: fetchMovies, findReview: fetchReview, loading, review };
};
