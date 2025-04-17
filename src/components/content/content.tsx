import styles from './content.module.css'
import {Feed} from "../feed/feed.tsx";
import {FC} from "react";
import {IAd} from "../../api/api.types.ts";
import {baseUrl} from "../../api/api.ts";
import {Loader} from "../Loader/Loader.tsx";
import {useNavigate} from "react-router-dom";

interface IProps {
    hideFeed?: boolean
    data?: IAd[]
    isLoading: boolean
}

export const Content: FC<IProps> = ({hideFeed, data, isLoading}) => {

    const navigate = useNavigate()

    return (
        <div className={styles.root}>
            {
                (isLoading || !data) ?
                    <Loader/>
                    :
                    <div
                        className={styles.content}
                        style={{
                            maxHeight: hideFeed ? 'calc(100vh - 230px)' : 'calc(100vh - 160px)'
                        }}
                    >
                        {data.map(item => (
                            <div
                                key={item.id}
                                className={styles.product}
                                style={{height: hideFeed ? '240px' : '260px'}}
                                onClick={() => navigate(`/ad/${item.id}`)}
                            >
                                <div
                                    className={styles.photoContainer}
                                >
                                    <img
                                        src={baseUrl + item.photo_url}
                                        alt={'Product photo'}
                                        className={styles.photo}
                                    />
                                </div>
                                <div className={styles.description}>
                                    <div className={styles.mainInfo} style={{
                                        height: hideFeed ? '100%' : undefined
                                    }}>
                                        <p className={styles.name}>{item.title}</p>
                                        <p className={styles.name}>{item.price} $</p>
                                    </div>
                                    {
                                        !hideFeed &&
                                        <div className={styles.secondaryInfo}>
                                            <p>{item.seller_name}</p>
                                            <Feed
                                                rating={item.seller_rating}
                                                feedbacks={item.seller_review_number}
                                            />
                                        </div>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
            }
        </div>
    )
}