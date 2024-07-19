import cn from 'classnames';

import styles from './Heading.module.css';
import { IHeadingProps } from './Heading.props';

function Heading({ children, classNames }: IHeadingProps) {
	return <h1 className={cn(styles.heading, classNames)}>{children}</h1>;
}

export default Heading;
