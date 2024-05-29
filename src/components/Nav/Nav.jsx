import { useContext } from 'react';
import styles from './Nav.module.css';
import { UserContext } from '../../context/user.context';
const Nav = () => {
	const { activeUser, logoutUser } = useContext(UserContext);
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<a className={styles.link} href='#'>
						Поиск фильмов
					</a>
				</li>
				<li className={styles.item}>
					<a className={styles.link} href='#'>
						Мои фильмы
					</a>
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
					<a className={styles.link} href='#login' onClick={activeUser && logoutUser}>
						{activeUser?.isLogined ? (
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
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
