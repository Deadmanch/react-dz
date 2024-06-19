import { Suspense } from 'react';
import { Await, Link, useLoaderData } from 'react-router-dom';

import Heading from '@/components/Heading';
import { IMovieById } from '@/interfaces/movieById.interface';

import { Error } from '../Error';

import styles from './Movie.module.css';

export const Movie = () => {
	const { data } = useLoaderData() as { data: IMovieById };

	return (
		<Suspense fallback={<div>Загрузка...</div>}>
			<Await resolve={data} errorElement={<Error />}>
				{({ data }: { data: IMovieById }) => (
					<div className={styles.container}>
						<Link to='/' className={styles.back}>
							Поиск фильмов
						</Link>
						<Heading>{data.name}</Heading>
					</div>
				)}
			</Await>
		</Suspense>
	);
};
