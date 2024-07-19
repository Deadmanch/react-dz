import Loader from '../Loader';
import MovieCard from '../MovieCard/MovieCard';

import styles from './MovieList.module.css';
import { IMovieListProps } from './MovieList.props';

import ImagePlaceholder from '/public/no-image.png';

const MovieList = ({ movies, isLoading }: IMovieListProps) => {
	if (isLoading) {
		return <Loader isLoading={isLoading} />;
	}

	if (movies.length === 0) {
		return (
			<div className={styles.notFound}>
				<h2 className={styles.notFoundTitle}>Ничего не найдено</h2>
				<p>Попробуйте изменить запрос или ввести более точное название фильма</p>
			</div>
		);
	}

	return (
		<div className={styles.list}>
			{movies.map(movie => (
				<MovieCard
					key={movie.id}
					id={movie.id}
					img={movie.poster.url || ImagePlaceholder}
					name={movie.name}
					rating={movie.rating.kp || 0}
				/>
			))}
		</div>
	);
};

export default MovieList;
