import styles from './header.module.css'
import {Feed} from "../../../../components/feed/feed.tsx";
import {useNavigate} from "react-router-dom";
import {FC} from "react";

interface IProps {
    photo: string
    title: string
    name: string
    rating: number
    sellerID: number
    feedbacksCount: number
}

export const AdHeader: FC<IProps> = ({title, photo, name, sellerID, feedbacksCount, rating}) => {
    const navigate = useNavigate()

    return (
        <div className={styles.root}>
            <button
                onClick={() => navigate('/')}
                className={styles.backBtn}
            >
                Back
            </button>
            <img
                alt={'Фото товара'}
                className={styles.image}
                src={photo}
            />
            <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <div
                    className={styles.secondaryInfo}
                    onClick={() => navigate(`/seller/${sellerID}`)}
                >
                    <p className={styles.sellerName}>{name}</p>
                    <Feed rating={rating} feedbacks={feedbacksCount}/>
                </div>
            </div>
        </div>
    )
}