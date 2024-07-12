export const loadState = <T>(key: string): T | undefined => {
	try {
		const jsonState = localStorage.getItem(key);
		return jsonState ? JSON.parse(jsonState) : undefined;
	} catch (error) {
		console.error('Error loading state:', error);
		return undefined;
	}
};

export const saveState = <T>(key: string, state: T) => {
	const stringState = JSON.stringify(state);
	localStorage.setItem(key, stringState);
};
