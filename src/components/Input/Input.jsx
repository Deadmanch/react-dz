import styles from './Input.module.css';
import { forwardRef } from 'react';
import cn from 'classnames';

const Input = forwardRef(({ icon, className, ...props }, ref) => {
	return (
		<div className={styles.wrapper}>
			<input
				ref={ref}
				className={cn(styles.input, { [styles.withIcon]: icon }, className)}
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
