import styles from './Heading.module.css';
import { IHeadingProps } from './Heading.props';

function Heading({ children }: IHeadingProps) {
	return <h1 className={styles.heading}>{children}</h1>;
}

export default Heading;
