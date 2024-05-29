import { useState, useEffect } from 'react';
import { USERS_STORAGE_KEY } from '../helpers/localStorageKeys';

export const useAuth = () => {
	const [users, setUsers] = useState([]);
	const [activeUser, setActiveUser] = useState(null);

	useEffect(() => {
		const storedUsers = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY));
		if (storedUsers) {
			setUsers(storedUsers);
		}
	}, []);

	const loginUser = userName => {
		const updatedUsers = users.map(user => ({
			...user,
			isLogined: user.name === userName ? true : false
		}));

		let userExists = updatedUsers.find(user => user.isLogined);

		if (!userExists) {
			const newUser = { name: userName, isLogined: true };
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
			isLogined: false
		}));

		localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
		setActiveUser(null);
		setUsers(updatedUsers);
	};

	return { loginUser, logoutUser, activeUser };
};
