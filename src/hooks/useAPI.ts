import { useState, useEffect, useCallback } from 'react';

import { fetchApi } from '@/helpers/appClient';
import { IMovie } from '@/interfaces/movie.interface';

interface IMovieResponse {
	docs: IMovie[];
}

const requestRandomMovie = async (): Promise<IMovie | null> => {
	return await fetchApi<IMovie>({
		endpoint: '/random',
		params: {
			notNullFields: ['name', 'poster.url', 'description']
		}
	});
};

const requestMovies = async (name: string): Promise<IMovie[]> => {
	const data = await fetchApi<IMovieResponse>({
		endpoint: '/search',
		params: {
			page: 1,
			limit: 8,
			query: name
		}
	});
	return data?.docs || [];
};

export const useApi = () => {
	const [movies, setMovies] = useState<IMovie[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const fetchMovies = useCallback(async (name: string) => {
		setLoading(true);
		const data = await requestMovies(name);
		setMovies(data);
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

	return { movies, findMovies: fetchMovies, loading };
};
