import cn from 'classnames';
import { forwardRef, MouseEvent, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IMovie } from '@/interfaces/movie.interface';
import { removeMovieFromFavorites, addMovieToFavorites } from '@/store/favorites.slice';
import { AppDispatch, RootState } from '@/store/store';

import styles from './Favorite.module.css';
import { IFavoriteProps } from './Favorite.props';

const Favorite = forwardRef<HTMLButtonElement, IFavoriteProps>(function Favorite(
	{ id, name, img, rating },
	ref
) {
	const dispatch = useDispatch<AppDispatch>();
	const activeUser = useSelector((s: RootState) => s.users.activeUser);
	const favoriteMovies = useSelector((s: RootState) => {
		const userFavorites = activeUser ? s.favorites[activeUser.name] : undefined;
		return userFavorites ? userFavorites : [];
	});

	const isFavorite = useMemo(
		() => favoriteMovies.some((movie: IMovie) => movie.id === id),
		[favoriteMovies, id]
	);

	const handleFavorite = (e: MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (!activeUser) return;
		if (isFavorite) {
			dispatch(removeMovieFromFavorites({ username: activeUser.name, movieId: id }));
		} else {
			const movie: IMovie = { id, name, poster: { url: img }, rating: { kp: rating } };
			dispatch(addMovieToFavorites({ username: activeUser.name, movie }));
		}
	};

	const label = isFavorite ? 'В избранном' : 'В избранное';
	return (
		<button
			ref={ref}
			onClick={handleFavorite}
			className={cn(styles['favorite'], { [styles['favorite_active']]: isFavorite })}
		>
			<img src={!isFavorite ? '/icons/like.svg' : '/icons/bookmark.svg'} />
			{label}
		</button>
	);
});

export default Favorite;
