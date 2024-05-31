import { useEffect, useState } from 'react';
import { IUser } from '../interfaces/user.interface';

const USERS_STORAGE_KEY = 'users';

export const useAuth = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const [activeUser, setActiveUser] = useState<IUser | null>(null);

	useEffect(() => {
		const storedUsers = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || '[]');
		if (storedUsers) {
			setUsers(storedUsers);
		}
	}, []);

	const loginUser = (userName: string) => {
		const updatedUsers = users.map(user => ({
			...user,
			isLogged: user.name === userName ? true : false
		}));

		let userExists = updatedUsers.find(user => user.isLogged);

		if (!userExists) {
			const newUser: IUser = { name: userName, isLogged: true };
			updatedUsers.push(newUser);
			userExists = newUser;
		}

		localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
		setActiveUser(userExists);
		setUsers(updatedUsers);
	};

	const logoutUser = () => {
		const updatedUsers = users.map(user => ({
			...user,
			isLogged: false
		}));

		localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
		setActiveUser(null);
		setUsers(updatedUsers);
	};

	return { loginUser, logoutUser, activeUser };
};
