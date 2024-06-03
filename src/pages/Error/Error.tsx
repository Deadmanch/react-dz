import Button from '@/components/Button';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import { useNavigate } from 'react-router-dom';
import styles from './Error.module.css';
export const Error = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className={styles.wrapper}>
				<Heading>Упс... Ничего не найдено</Heading>
				<Paragraph>Попробуйте изменить запрос или ввести более точное название фильма</Paragraph>
				<Button onClick={() => navigate('/')}>Вернуться на главную</Button>
			</div>
		</>
	);
};
