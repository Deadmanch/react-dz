import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';

import { IMovie } from '@/interfaces/movie.interface';

export const API_URL = 'https://api.kinopoisk.dev/v1.4/movie';
export const API_KEY = 'MHTADPZ-GDK452K-QJZCX79-ABSY3XX';

interface IMovieResponse {
	docs: IMovie[];
}
interface FetchApiConfig {
	endpoint: string;
	params?: Record<string, any>;
	headers?: Record<string, string>;
}

const apiClient = axios.create({
	baseURL: API_URL,
	headers: {
		accept: 'application/json',
		'X-API-KEY': API_KEY
	}
});

const fetchApi = async <T>({ endpoint, params, headers }: FetchApiConfig): Promise<T | null> => {
	try {
		const { data } = await apiClient.get<T>(endpoint, {
			headers: {
				accept: 'application/json',
				...headers
			},
			params
		});
		return data;
	} catch (error) {
		console.error('Ошибка при выполнении запроса:', error);
		return null;
	}
};

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
