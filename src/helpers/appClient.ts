import axios from 'axios';

export const API_URL = 'https://api.kinopoisk.dev/v1.4/movie';
export const API_KEY = import.meta.env.VITE_APP_API_KEY;
console.log(API_KEY);

interface FetchApiConfig {
	endpoint: string;
	params?: Record<string, any>;
	headers?: Record<string, string>;
}

export const apiClient = axios.create({
	baseURL: API_URL,
	headers: {
		accept: 'application/json',
		'X-API-KEY': API_KEY
	}
});

export const fetchApi = async <T>({
	endpoint,
	params,
	headers
}: FetchApiConfig): Promise<T | null> => {
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
