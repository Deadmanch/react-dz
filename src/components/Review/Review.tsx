import Paragraph from '@/components/Paragraph';
import { formatDate } from '@/helpers/formatDate';

import styles from './Review.module.css';
import { IReviewProps } from './Review.props';

const Review = ({ title, review, date }: IReviewProps) => {
	return (
		<div className={styles.review}>
			<div className={styles.top}>
				{title && <h3 className={styles.title}>{title}</h3>}
				<span className={styles.date}>{formatDate(date)}</span>
			</div>
			<Paragraph classNames={styles.text}>{review}</Paragraph>
		</div>
	);
};

export default Review;
