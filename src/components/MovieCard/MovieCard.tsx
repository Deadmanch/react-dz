import { Link } from 'react-router-dom';
import Favorite from '../Favorite';
import Rating from '../Rating';
import styles from './MovieCard.module.css';
import { IMovieCardProps } from './MovieCard.props';

const MovieCard = (props: IMovieCardProps) => {
	return (
		<Link to={`/movie/${props.id}`} className={styles.card}>
			<img className={styles.card__image} src={props.img} alt={props.title} />
			<div className={styles.rating__container}>
				<Rating rating={props.rating} />
			</div>
			<div className={styles.card__bottom}>
				<h3 className={styles.card__title}>{props.title}</h3>
				<Favorite isFavorite={props.favorite} />
			</div>
		</Link>
	);
};

export default MovieCard;
