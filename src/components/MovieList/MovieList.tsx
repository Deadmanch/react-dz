import styles from './MovieList.module.css';
import { IMovieListProps } from './MovieList.props';

const MovieList = ({ children }: IMovieListProps) => {
	return <div className={styles.list}>{children}</div>;
};

export default MovieList;
