import { useSelector } from 'react-redux';

import Heading from '@/components/Heading';
import MovieList from '@/components/MovieList';
import Paragraph from '@/components/Paragraph';
import { RootState } from '@/store/store';

import styles from './Favorites.module.css';
export const Favorites = () => {
	const activeUser = useSelector((s: RootState) => s.users.activeUser);
	const favorites = useSelector((s: RootState) => s.favorites);

	const favoriteMovies = activeUser && favorites[activeUser.name] ? favorites[activeUser.name] : [];

	if (favoriteMovies.length === 0) {
		return (
			<div className={styles.notFound}>
				<Heading>Избранное</Heading>
				<Paragraph>Вы ещё не добавили ни одного фильма в избранное</Paragraph>
			</div>
		);
	}
	return (
		<>
			<Heading classNames={styles.title}>Избранное</Heading>
			<MovieList movies={favoriteMovies} />
		</>
	);
};
