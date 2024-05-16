import Nav from '../../components/Nav/Nav';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<img src='/icons/logo.svg' alt='Логотип' />
			<Nav />
		</header>
	);
};
export default Header;
