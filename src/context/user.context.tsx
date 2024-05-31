import { createContext, ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import { IUser } from '../interfaces/user.interface';

export type UserContextType = {
	activeUser: IUser | null;
	loginUser: (userName: string) => void;
	logoutUser: () => void;
};

export const UserContext = createContext<UserContextType>({
	activeUser: null,
	loginUser: () => {},
	logoutUser: () => {}
});
const UserContextProvider = ({ children }: { children: ReactNode }) => {
	const { activeUser, loginUser, logoutUser } = useAuth();

	return <UserContext.Provider value={{ activeUser, loginUser, logoutUser }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
