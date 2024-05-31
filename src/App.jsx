import Button from '@components/Button';
import Heading from '@components/Heading';
import Input from '@components/Input';
import MovieCard from '@components/MovieCard';
import MovieList from '@components/MovieList';
import Paragraph from '@components/Paragraph';
import Header from './layouts/Header';
import SearchIcon from '/icons/search.svg';
import styles from './App.module.css';
import { useRef } from 'react';
import { useUser } from './hooks/useUser';
function App() {
	const data = [
		{
			title: 'Поиск',
			text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
		}
	];
	const movies = [
		{
			id: 1,
			title: 'Black Widow',
			rating: 324,
			favorite: 0,
			img: '/movieImg/black_window.png'
		},
		{
			id: 2,
			title: 'Shang Chi',
			rating: 124,
			favorite: 0,
			img: '/movieImg/shang_chi.png'
		},
		{
			id: 3,
			title: 'Loki',
			rating: 235,
			favorite: 1,
			img: '/movieImg/loki.png'
		},
		{
			id: 4,
			title: 'How I Met Your Mother',
			rating: 123,
			favorite: 0,
			img: '/movieImg/how_i_meet.png'
		},
		{
			id: 5,
			title: 'Money Heist',
			rating: 8100,
			favorite: 1,
			img: '/movieImg/money_heist.png'
		},
		{
			id: 6,
			title: 'Friends',
			rating: 1233,
			favorite: 0,
			img: '/movieImg/friends.png'
		},
		{
			id: 7,
			title: 'The Big Bang Theory',
			rating: 10,
			favorite: 0,
			img: '/movieImg/big_bang_theory.png'
		},
		{
			id: 8,
			title: 'Two And a Half Men',
			rating: 456,
			img: '/movieImg/two_and_half_man.png'
		}
	];

	const { loginUser } = useUser();
	const inputRef = useRef(null);

	const onLoginClick = () => {
		const value = inputRef.current.value;
		if (value) {
			loginUser(value);
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
				<Paragraph text={data[0].text} />
			</div>
			<div className={styles.search}>
				<Input placeholder={'Введите название...'} icon={SearchIcon} />
				<Button onClick={onClickLog} text={'Искать'} />
			</div>
			<MovieList>
				{movies.map(movie => (
					<MovieCard
						key={movie.id}
						title={movie.title}
						img={movie.img}
						rating={movie.rating}
						favorite={movie.favorite}
					/>
				))}
			</MovieList>

			<div id='login' className={styles.info}>
				<Heading>Вход</Heading>
				<Input ref={inputRef} placeholder={'Ваше имя'} />
				<Button onClick={onLoginClick} text={'Войти в профиль'} />
			</div>
		</div>
	);
}

export default App;
