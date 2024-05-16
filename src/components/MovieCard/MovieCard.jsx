import Favorite from '../Favorite/Favorite';
import Rating from '../Rating/Rating';
import styles from './MovieCard.module.css';

const MovieCard = ({ title, img, rating, favorite }) => {
	return (
		<a href='#' className={styles.card}>
			<img className={styles.card__image} src={img} alt={title} />

			<div className={styles.rating__container}>
				<Rating rating={rating} />
			</div>
			<div className={styles.card__bottom}>
				<h3 className={styles.card__title}>{title}</h3>
				<Favorite favorite={favorite} />
			</div>
		</a>
	);
};

export default MovieCard;
