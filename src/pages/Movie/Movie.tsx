import { useParams } from 'react-router-dom';

import Heading from '@/components/Heading';

export const Movie = () => {
	const { id } = useParams();
	return <Heading>Movie - {id}</Heading>;
};
