import { redirect } from 'react-router-dom';

import { IUser } from '@/interfaces/user.interface';
import { store, RootState } from '@/store/store';

const getActiveUser = (): IUser | null => {
	const state: RootState = store.getState();
	return state.users.activeUser;
};

export const RequireAuthLoader = async () => {
	const user = getActiveUser();
	if (!user) {
		return redirect('/login');
	}
	return null;
};
