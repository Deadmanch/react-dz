import cn from 'classnames';
import { forwardRef } from 'react';

import styles from './Favorite.module.css';
import { IFavoriteProps } from './Favorite.props';

const Favorite = forwardRef<HTMLButtonElement, IFavoriteProps>(function Favorite(
	{ isFavorite },
	ref
) {
	const label = isFavorite ? 'В избранном' : 'В избранное';
	return (
		<button
			ref={ref}
			className={cn(styles['favorite'], { [styles['favorite_active']]: isFavorite })}
		>
			<img src={!isFavorite ? '/icons/like.svg' : '/icons/bookmark.svg'} />
			{label}
		</button>
	);
});

export default Favorite;
