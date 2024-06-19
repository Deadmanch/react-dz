import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useUser } from '@/hooks/useUser';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
	const { activeUser } = useUser();

	if (activeUser === null) {
		return <Navigate to='/login' replace />;
	}
	return children;
};
