import { useRef } from 'react';

import Button from '@/components/Button';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import MovieCard from '@/components/MovieCard';
import MovieList from '@/components/MovieList';
import Paragraph from '@/components/Paragraph';
import { useApi } from '@/hooks/useAPI';

import ImagePlaceholder from '/public/no-image.png';
import SearchIcon from '/public/icons/search.svg';

import styles from './Main.module.css';

export const Main = () => {
	const { movies, findMovies, loading } = useApi();
	const searchInputRef = useRef<HTMLInputElement>(null);

	const onSearch = () => {
		if (searchInputRef.current) {
			findMovies(searchInputRef.current.value);
		}
	};

	const renderLoading = () => (
		<div className={styles.loader}>
			<h2 className={styles.loaderText}>Загрузка...</h2>
		</div>
	);

	const renderMovies = () => (
		<MovieList>
			{movies.map(movie => (
				<MovieCard
					key={movie.id}
					id={movie.id}
					img={movie.poster.url || ImagePlaceholder}
					title={movie.name}
					rating={movie.rating.kp}
					favorite={Boolean(0)}
				/>
			))}
		</MovieList>
	);

	const renderNotFound = () => (
		<div className={styles.notFound}>
			<h2 className={styles.notFoundTitle}>Ничего не найдено</h2>
			<Paragraph>Попробуйте изменить запрос или ввести более точное название фильма</Paragraph>
		</div>
	);

	return (
		<>
			<div className={styles.info}>
				<Heading>Поиск</Heading>
				<Paragraph>
					Поиск фильма, сериала или мультфильма для поиска и добавления в избранное.
				</Paragraph>
			</div>
			<div className={styles.search}>
				<Input placeholder={'Введите название...'} icon={SearchIcon} ref={searchInputRef} />
				<Button onClick={onSearch}>Искать</Button>
			</div>
			{loading ? renderLoading() : movies.length > 0 ? renderMovies() : renderNotFound()}
		</>
	);
};
