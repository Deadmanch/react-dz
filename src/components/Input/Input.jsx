import styles from './Input.module.css';
import { forwardRef } from 'react';

const Input = forwardRef(({ icon, ...props }, ref) => {
	return (
		<div className={styles.wrapper}>
			<input
				ref={ref}
				className={styles.input}
				{...props}
				type='text'
				placeholder={props.placeholder}
			/>
			{icon && (
				<img
					className={styles.icon}
					src={icon}
					width={24}
					height={24}
					alt='Иконка поиска'
					loading='lazy'
				/>
			)}
		</div>
	);
});

Input.displayName = 'Input';
export default Input;
