import { Link } from 'react-router-dom';

import Favorite from '../Favorite';
import Rating from '../Rating';

import styles from './MovieCard.module.css';
import { IMovieCardProps } from './MovieCard.props';

const MovieCard = ({ id, img, title, rating, favorite }: IMovieCardProps) => {
	return (
		<Link to={`/movie/${id}`} className={styles.card}>
			<img className={styles.card__image} src={img} alt={title} />
			<div className={styles.rating__container}>
				<Rating rating={rating} />
			</div>
			<div className={styles.card__bottom}>
				<h3 className={styles.card__title}>{title}</h3>
				<Favorite isFavorite={favorite} />
			</div>
		</Link>
	);
};

export default MovieCard;
