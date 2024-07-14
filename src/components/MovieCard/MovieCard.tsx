import { Link } from 'react-router-dom';

import Favorite from '../Favorite';
import Rating from '../Rating';

import styles from './MovieCard.module.css';
import { IMovieCardProps } from './MovieCard.props';

const MovieCard = ({ id, img, name, rating }: IMovieCardProps) => {
	return (
		<Link to={`/movie/${id}`} className={styles.card}>
			<img className={styles.card__image} src={img} alt={name} />
			<div className={styles.rating__container}>
				<Rating rating={rating} />
			</div>
			<div className={styles.card__bottom}>
				<h3 className={styles.card__title}>{name}</h3>
				<Favorite id={id} name={name} img={img} rating={rating} />
			</div>
		</Link>
	);
};

export default MovieCard;
