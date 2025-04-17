import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";
import styles from './button.module.css'

interface IProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
}

export const Button: FC<IProps> = (props) => {
    return (
        <button
            {...props}
            className={styles.root}
            style={{
                background: props.variant === 'secondary' ? '#050103' : undefined,
                border: props.variant === 'secondary' ? '1px solid #C08F54' : undefined
            }}
        >
            {props.children}
        </button>
    )
}