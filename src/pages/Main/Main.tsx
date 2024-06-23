import { useRef } from 'react';

import Button from '@/components/Button';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import MovieList from '@/components/MovieList';
import Paragraph from '@/components/Paragraph';
import { useApi } from '@/hooks/useAPI';

import SearchIcon from '/public/icons/search.svg';

import styles from './Main.module.css';

export const Main = () => {
	const { movies, findMovies, loading } = useApi();
	const searchInputRef = useRef<HTMLInputElement>(null);

	const onSearch = () => {
		findMovies(searchInputRef.current!.value);
	};

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
			<MovieList movies={movies} isLoading={loading} />
		</>
	);
};
