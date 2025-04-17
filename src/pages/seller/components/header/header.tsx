import styles from './header.module.css'
import {useNavigate} from "react-router-dom";
import {Feed} from "../../../../components/feed/feed.tsx";
import {FC} from "react";
import {IUser} from "../../../../api/api.types.ts";
import {baseUrl} from "../../../../api/api.ts";

interface IProps {
    type: 'personal' | 'public'
    user: IUser
}

export const ProfileHeader: FC<IProps> = ({type, user}) => {

    const navigate = useNavigate()

    return (
        <div className={styles.header}>
            <button
                onClick={() => navigate('/')}
                className={styles.backBtn}
            >
                Back
            </button>
            <div className={styles.headerContent}>
                <img src={baseUrl + user.photo_url} alt={'Аватар'} className={styles.avatar}/>

                <div className={styles.contentRight}>
                    <div
                        className={styles.personal}
                        style={{
                            justifyContent: type === 'personal' ? undefined : 'center'
                        }}
                    >
                        <p className={styles.nickname}>{user.username}</p>
                        {type === 'personal' && <p className={styles.balance}>{user.balance} $</p>}
                    </div>
                    <Feed
                        rating={user.rating}
                        feedbacks={user.review_number}
                    />
                </div>
            </div>
        </div>
    )
}