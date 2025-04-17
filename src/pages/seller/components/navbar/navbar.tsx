import styles from './navbar.module.css'
import clsx from "clsx";
import {Dispatch, FC, SetStateAction} from "react";

const categories = [
    {label: 'Ваши товары', value: 'ads'},
    {label: 'Ваши покупки', value: 'purchased'},
]

type TContext = 'ads' | 'purchased'

interface IProps {
    context: TContext
    setContext: Dispatch<SetStateAction<TContext>>
}

export const ProfileNavbar: FC<IProps> = ({context, setContext}) => {
    return (
        <nav className={styles.nav}>
            {categories.map(item => (
                <button
                    key={item.value}
                    className={clsx(styles.navButton, {
                        [styles.navButtonActive]: context === item.value,
                        [styles.navButtonDisabled]: context !== item.value
                    })}
                    onClick={() => setContext(item.value as TContext)}
                >
                    {item.label}
                </button>
            ))}
        </nav>
    )
}