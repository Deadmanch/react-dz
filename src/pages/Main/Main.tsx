import Button from '@/components/Button';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import MovieCard from '@/components/MovieCard';
import MovieList from '@/components/MovieList';
import Paragraph from '@/components/Paragraph';
import { movies } from '@/mock/data';

import SearchIcon from '/public/icons/search.svg';

import styles from './Main.module.css';

export const Main = () => {
	const onClickLog = () => {
		console.log('Click on button!');
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
				<Input placeholder={'Введите название...'} icon={SearchIcon} />
				<Button onClick={onClickLog}>Искать</Button>
			</div>
			<MovieList>
				{movies.map(({ id, img, title, rating, favorite }) => (
					<MovieCard
						key={id}
						title={title}
						img={img}
						rating={rating}
						favorite={Boolean(favorite)}
						id={id}
					/>
				))}
			</MovieList>
		</>
	);
};
