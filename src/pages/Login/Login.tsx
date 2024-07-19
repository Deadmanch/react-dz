import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import { AppDispatch } from '@/store/store';
import { loginUser } from '@/store/user.slice';

import styles from './Login.module.css';

export const Login = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const onLoginClick = () => {
		if (inputRef.current && inputRef.current.value) {
			dispatch(loginUser(inputRef.current.value));
		}
		navigate('/');
	};

	return (
		<>
			<div className={styles.container}>
				<div className={styles.info}>
					<Heading>Вход</Heading>
					<Input ref={inputRef} placeholder='Ваше имя' />
					<Button onClick={onLoginClick}>Войти в профиль</Button>
				</div>
			</div>
		</>
	);
};
