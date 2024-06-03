import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import styles from './Nav.module.css';

const Nav = () => {
	const { activeUser, logoutUser } = useUser();
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<NavLink to='/' className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
						Поиск фильмов
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink to='/favorites' className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
						Мои фильмы
					</NavLink>
				</li>
				{activeUser && (
					<li className={styles.item}>
						<a className={styles.link} href='#'>
							{activeUser.name}
							<img src='/icons/user.svg' alt='Иконка пользователя' loading='lazy' width={24} height={24} />
						</a>
					</li>
				)}
				<li className={styles.item}>
					<NavLink
						className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}
						to='/login'
						onClick={activeUser ? logoutUser : undefined}
					>
						{activeUser?.isLogged ? (
							'Выйти'
						) : (
							<>
								Войти
								<img src='icons/login.svg' alt='Иконка входа' loading='lazy' width={24} height={24} />
							</>
						)}
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
