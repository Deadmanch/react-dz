export const formatDate = (dateString: string | undefined): string => {
	if (!dateString) return '';
	const [date] = dateString.split('T');
	return date;
};
