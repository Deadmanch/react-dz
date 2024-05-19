import styles from './Nav.module.css';
const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<a className={styles.link} href='#'>
						Поиск фильмов
					</a>
				</li>
				<li className={(styles.item, styles.active)}>
					<a className={styles.link} href='#'>
						Мои фильмы
					</a>
				</li>
				<li className={styles.item}>
					<a className={styles.link} href='#'>
						Войти
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
