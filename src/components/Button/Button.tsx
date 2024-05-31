import styles from './Button.module.css';
import { IButtonProps } from './Button.props';

function Button({ children, ...props }: IButtonProps) {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	);
}

export default Button;
