import { configureStore } from '@reduxjs/toolkit';

import favoritesSlice from './favorites.slice';
import { saveState } from './localStorage';
import userSlice from './user.slice';

export const store = configureStore({
	reducer: {
		favorites: favoritesSlice,
		users: userSlice
	}
});

store.subscribe(() => {
	saveState('favorites', store.getState().favorites);
	saveState('users', store.getState().users);
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
