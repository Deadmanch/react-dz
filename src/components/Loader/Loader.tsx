import styles from './Loader.module.css';

interface ILoaderProps {
	isLoading: boolean;
}

const Loader = ({ isLoading }: ILoaderProps) => {
	if (!isLoading) {
		return null;
	}

	return (
		<div className={styles.loader}>
			<h2 className={styles.loaderText}>Загрузка...</h2>
		</div>
	);
};

export default Loader;
