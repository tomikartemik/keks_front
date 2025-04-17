import styles from './content.module.css'
import {FC} from "react";

interface IProps {
    description: string
}

export const AdContent: FC<IProps> = ({description}) => {
    return (
        <div className={styles.root}>
            <p className={styles.heading}>Description</p>
            <div className={styles.descriptionContainer}>
                <p className={styles.description}>{description.replace(/\\n/g, '\n')}</p>
            </div>
        </div>
    )
}