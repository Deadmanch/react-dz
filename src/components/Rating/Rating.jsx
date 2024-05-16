import styles from './Rating.module.css';

const Rating = ({ rating }) => {
	return (
		<span className={styles.rating}>
			<img src='/icons/star.svg' alt='Рейтинг' />
			{rating}
		</span>
	);
};

export default Rating;
