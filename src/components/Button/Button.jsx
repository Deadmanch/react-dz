import styles from './Button.module.css';

function Button({ text, ...props }) {
	return (
		<button className={styles.button} {...props}>
			{text}
		</button>
	);
}

export default Button;
