import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addMovieToFavorites, removeMovieFromFavorites } from '@/store/favorites.slice';
import { AppDispatch, RootState } from '@/store/store';

import Favorite from '../Favorite';
import Rating from '../Rating';

import styles from './MovieCard.module.css';
import { IMovieCardProps } from './MovieCard.props';

const MovieCard = ({ id, img, name, rating, favorite }: IMovieCardProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const activeUser = useSelector((s: RootState) => s.users.activeUser);

	const handleFavorite = (e: MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (!activeUser) return;
		if (favorite) {
			dispatch(removeMovieFromFavorites({ username: activeUser.name, movieId: id }));
		} else {
			const movie = { id, name, poster: { url: img }, rating: { kp: rating } };
			dispatch(addMovieToFavorites({ username: activeUser.name, movie }));
		}
	};
	return (
		<Link to={`/movie/${id}`} className={styles.card}>
			<img className={styles.card__image} src={img} alt={name} />
			<div className={styles.rating__container}>
				<Rating rating={rating} />
			</div>
			<div className={styles.card__bottom}>
				<h3 className={styles.card__title}>{name}</h3>
				<Favorite isFavorite={favorite} onClick={handleFavorite} />
			</div>
		</Link>
	);
};

export default MovieCard;
