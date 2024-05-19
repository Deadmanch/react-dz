import styles from './MovieList.module.css';

const MovieList = ({ children }) => {
	return <div className={styles.list}>{children}</div>;
};

export default MovieList;
