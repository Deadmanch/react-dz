import { redirect } from 'react-router-dom';

import { IUser } from '@/interfaces/user.interface';

const getActiveUser = async (): Promise<IUser | null> => {
	const storageData = JSON.parse(localStorage.getItem('users') || '{}');
	return storageData.activeUser || null;
};

export const RequireAuthLoader = async () => {
	const user = await getActiveUser();
	if (!user) {
		return redirect('/login');
	}
	return null;
};
