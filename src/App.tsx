import Button from '@components/Button';
import Heading from '@components/Heading';
import Input from '@components/Input';
import MovieCard from '@components/MovieCard';
import MovieList from '@components/MovieList';
import Paragraph from '@components/Paragraph';
import { useRef } from 'react';
import styles from './App.module.css';
import { movies } from './helpers/data';
import { useUser } from './hooks/useUser';
import Header from './layouts/Header';
import SearchIcon from '/icons/search.svg';
function App() {
	const data = [
		{
			title: 'Поиск',
			text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
		}
	];

	const { loginUser } = useUser();
	const inputRef = useRef<HTMLInputElement>(null);

	const onLoginClick = () => {
		if (inputRef.current && inputRef.current.value) {
			loginUser(inputRef.current.value);
		}
	};

	const onClickLog = () => {
		console.log('Click on button!');
	};

	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.info}>
				<Heading>{data[0].title}</Heading>
				<Paragraph> {data[0].text}</Paragraph>
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
					/>
				))}
			</MovieList>

			<div id='login' className={styles.info}>
				<Heading>Вход</Heading>
				<Input ref={inputRef} placeholder={'Ваше имя'} />
				<Button onClick={onLoginClick}> Войти в профиль </Button>
			</div>
		</div>
	);
}

export default App;
