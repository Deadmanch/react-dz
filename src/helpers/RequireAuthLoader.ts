import { redirect } from 'react-router-dom';

import { USERS_STORAGE_KEY } from '@/hooks/useAuth';
import { IUser } from '@/interfaces/user.interface';

const getActiveUser = async (): Promise<IUser | null> => {
	const users: IUser[] = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || '[]');
	return users.find((user: IUser) => user.isLogged) || null;
};

export const RequireAuthLoader = async () => {
	const user = await getActiveUser();
	if (!user) {
		return redirect('/login');
	}

	return null;
};
