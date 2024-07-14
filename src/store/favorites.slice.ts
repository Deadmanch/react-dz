import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMovie } from '@/interfaces/movie.interface';

import { loadState, saveState } from './localStorage';

interface IFavoritesState {
	[username: string]: IMovie[];
}

const initialState: IFavoritesState = loadState<IFavoritesState>('favorites') ?? {};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addMovieToFavorites(state, action: PayloadAction<{ username: string; movie: IMovie }>) {
			const { username, movie } = action.payload;
			if (!state[username]) {
				state[username] = [];
			}
			state[username].push(movie);
			saveState('favorites', state);
		},
		removeMovieFromFavorites(state, action: PayloadAction<{ username: string; movieId: number }>) {
			const { username, movieId } = action.payload;
			if (state[username]) {
				state[username] = state[username].filter(movie => movie.id !== movieId);
				saveState('favorites', state);
			}
		}
	}
});

export const { addMovieToFavorites, removeMovieFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
