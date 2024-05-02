import './App.css';
import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';
import Paragraph from './components/Paragraph/Paragraph';

function App() {
	const data = [
		{
			title: 'Поиск',
			text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
		}
	];
	return (
		<>
			<Heading text={data[0].title} />
			<Paragraph text={data[0].text} />
			<Button text='Искать' />
		</>
	);
}

export default App;
