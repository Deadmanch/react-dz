import { Suspense, useEffect } from 'react';
import { Await, Link, useLoaderData, useParams } from 'react-router-dom';

import Favorite from '@/components/Favorite';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import Rating from '@/components/Rating';
import Review from '@/components/Review';
import { formatDate } from '@/helpers/formatDate';
import { useApi } from '@/hooks/useAPI';
import { IMovie } from '@/interfaces/movie.interface';

import { Error } from '../Error';

import styles from './Movie.module.css';

export const Movie = () => {
	const { data } = useLoaderData() as { data: IMovie };
	const { id } = useParams();
	const { findReview, review } = useApi();

	useEffect(() => {
		id && findReview(id);
	}, [id, findReview]);

	return (
		<Suspense fallback={<div>Загрузка...</div>}>
			<Await resolve={data} errorElement={<Error />}>
				{({ data }: { data: IMovie }) => (
					<>
						<div className={styles.header}>
							<Link to='/' className={styles.back}>
								Поиск фильмов
							</Link>
							<Heading>{data.name}</Heading>
						</div>
						<div className={styles.body}>
							<img
								className={styles.image}
								src={data.poster.url}
								alt={`Изображение фильма - ${data.name}`}
								width={480}
								height={720}
							/>
							<div className={styles.info}>
								<Paragraph classNames={styles.description}>{data.description}</Paragraph>
								<div className={styles.rating}>
									<Rating rating={data.rating.kp || 0} />
									<Favorite
										id={data.id}
										name={data.name}
										img={data.poster.url}
										rating={data.rating.kp || 0}
									/>
								</div>
								<div className={styles.extraInfo}>
									<div className={styles.infoItem}>
										<Paragraph classNames={styles.infoItemTitle}>Тип</Paragraph>
										<Paragraph classNames={styles.infoItemValue}>{data.type}</Paragraph>
									</div>
									<div className={styles.infoItem}>
										<Paragraph classNames={styles.infoItemTitle}>Дата выхода</Paragraph>
										<Paragraph classNames={styles.infoItemValue}>
											{formatDate(data.premiere?.world)}
										</Paragraph>
									</div>
									<div className={styles.infoItem}>
										<Paragraph classNames={styles.infoItemTitle}>Длительность</Paragraph>
										<Paragraph classNames={styles.infoItemValue}>
											{data.movieLength} <span>мин</span>
										</Paragraph>
									</div>
									<div className={styles.infoItem}>
										<Paragraph classNames={styles.infoItemTitle}>Жанр</Paragraph>
										<Paragraph classNames={styles.infoItemValue}>
											{data.genres?.map(g => g.name).join(', ')}
										</Paragraph>
									</div>
								</div>
							</div>
						</div>
						<Paragraph classNames={styles.infoItemTitle}>Отзывы</Paragraph>
						{review && <Review title={review.title} review={review.review} date={review.date} />}
					</>
				)}
			</Await>
		</Suspense>
	);
};
