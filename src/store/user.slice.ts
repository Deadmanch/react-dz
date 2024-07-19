import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '@/interfaces/user.interface';

import { loadState, saveState } from './localStorage';

interface IUserState {
	user: IUser[];
	activeUser: IUser | null;
}

const initialState: IUserState = loadState<IUserState>('user') ?? {
	user: [],
	activeUser: null
};

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		loginUser(state, action: PayloadAction<string>) {
			state.user = state.user.map(user => ({
				...user,
				isLogged: user.name === action.payload ? true : false
			}));
			let userExists = state.user.find(user => user.isLogged);
			if (!userExists) {
				const newUser: IUser = { name: action.payload, isLogged: true };
				state.user.push(newUser);
				userExists = newUser;
			}

			state.activeUser = userExists;
			saveState('users', state);
		},
		logoutUser(state) {
			state.user = state.user.map(user => ({
				...user,
				isLogged: false
			}));

			state.activeUser = null;
			saveState('users', state);
		},

		loadUsers(state) {
			const storedUsers = loadState<IUser[]>('users');
			if (storedUsers) {
				state.user = storedUsers;
			}
		}
	}
});
export const { loginUser, logoutUser, loadUsers } = userSlice.actions;
export default userSlice.reducer;
