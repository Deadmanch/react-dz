import styles from './Paragraph.module.css';
import { IParagraphProps } from './Paragraph.props';

function Paragraph({ children }: IParagraphProps) {
	return <p className={styles.text}>{children}</p>;
}

export default Paragraph;
