import cn from 'classnames';
import styles from './Favorite.module.css';

const Favorite = ({ favorite }) => {
	const label = favorite ? 'В избранном' : 'В избранное';
	return (
		<button className={cn(styles['favorite'], { [styles['favorite--active']]: favorite })}>
			<img src={!favorite ? '/icons/like.svg' : '/icons/bookmark.svg'} />
			{label}
		</button>
	);
};

export default Favorite;
