import { ButtonHTMLAttributes } from 'react';

export interface IFavoriteProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isFavorite: boolean;
}
