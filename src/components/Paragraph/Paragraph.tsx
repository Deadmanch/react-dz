import cn from 'classnames';

import styles from './Paragraph.module.css';
import { IParagraphProps } from './Paragraph.props';

function Paragraph({ children, classNames }: IParagraphProps) {
	return <p className={cn(styles.text, classNames)}>{children}</p>;
}

export default Paragraph;
