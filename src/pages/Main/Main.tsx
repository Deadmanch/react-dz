import Button from '@/components/Button';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import MovieCard from '@/components/MovieCard';
import MovieList from '@/components/MovieList';
import Paragraph from '@/components/Paragraph';
import { movies } from '@/helpers/data';
import styles from './Main.module.css';
import SearchIcon from '/public/icons/search.svg';

export const Main = () => {
	const onClickLog = () => {
		console.log('Click on button!');
	};
	return (
		<>
			<div className={styles.info}>
				<Heading>Поиск</Heading>
				<Paragraph>Поиск фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
			</div>
			<div className={styles.search}>
				<Input placeholder={'Введите название...'} icon={SearchIcon} />
				<Button onClick={onClickLog}>Искать</Button>
			</div>
			<MovieList>
				{movies.map(movie => (
					<MovieCard
						key={movie.id}
						title={movie.title}
						img={movie.img}
						rating={movie.rating}
						favorite={Boolean(movie.favorite)}
						id={movie.id}
					/>
				))}
			</MovieList>
		</>
	);
};
