import UserContextProvider from '@/context/user.context';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import styles from './Layout.module.css';

export const Layout = () => {
	return (
		<UserContextProvider>
			<div className={styles.wrapper}>
				<Header />
				<main>
					<Outlet />
				</main>
			</div>
		</UserContextProvider>
	);
};
