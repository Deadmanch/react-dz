import styles from './Rating.module.css';
import { IRatingProps } from './Rating.props';

const Rating = ({ rating }: IRatingProps) => {
	return (
		<span className={styles.rating}>
			<img src='/icons/star.svg' alt='Рейтинг' />
			{rating}
		</span>
	);
};

export default Rating;
