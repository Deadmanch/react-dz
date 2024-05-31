import { useContext } from 'react';
import { UserContext, UserContextType } from '../context/user.context';

export const useUser = () => useContext<UserContextType>(UserContext);
