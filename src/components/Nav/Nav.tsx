import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logoutUser } from '@/store/user.slice';

import { AppDispatch, RootState } from '../../store/store';

import styles from './Nav.module.css';

const Nav = () => {
	const dispatch = useDispatch<AppDispatch>();
	const activeUser = useSelector((s: RootState) => s.users.activeUser);
	const favorites = useSelector((s: RootState) => s.favorites);

	const favoriteMoviesCount =
		activeUser && favorites[activeUser.name] ? favorites[activeUser.name].length : 0;

	const handleLogout = () => {
		dispatch(logoutUser());
	};

	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<NavLink
						to='/'
						className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}
					>
						Поиск фильмов
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink
						to='/favorites'
						className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}
					>
						Мои фильмы
						<span className={styles.count}>{favoriteMoviesCount}</span>
					</NavLink>
				</li>
				{activeUser && (
					<li className={styles.item}>
						<a className={styles.link} href='#'>
							{activeUser.name}
							<img
								src='/icons/user.svg'
								alt='Иконка пользователя'
								loading='lazy'
								width={24}
								height={24}
							/>
						</a>
					</li>
				)}
				<li className={styles.item}>
					<NavLink
						className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}
						to='/login'
						onClick={activeUser ? handleLogout : undefined}
					>
						{activeUser?.isLogged ? (
							'Выйти'
						) : (
							<>
								Войти
								<img
									src='icons/login.svg'
									alt='Иконка входа'
									loading='lazy'
									width={24}
									height={24}
								/>
							</>
						)}
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
