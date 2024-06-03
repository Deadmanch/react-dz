import Heading from '@/components/Heading';
import { useParams } from 'react-router-dom';

export const Movie = () => {
	const { id } = useParams();
	return <Heading>Movie - {id}</Heading>;
};
