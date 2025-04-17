import styles from './ad.module.css'
import {useGetAdById} from "../../api/queries/useGetAdById.tsx";
import {useParams} from "react-router-dom";
import {AdHeader} from "./components/header/header.tsx";
import {AdContent} from "./components/content/content.tsx";
import {Button} from "../../components/ui/button/button.tsx";
import {baseUrl} from "../../api/api.ts";
import {useModalsContext} from "../../components/modalContext/modal.context.tsx";
import {Loader} from "../../components/Loader/Loader.tsx";
import {useUserContext} from "../../components/authWrapper/authWrapper.tsx";

export const AdPage = () => {
    const {id} = useParams();

    const {data} = useGetAdById(+(id ?? 0))
    const {user} = useUserContext()

    const {onOpen} = useModalsContext()

    if (!data) return (
        <div className={styles.root}>
            <Loader/>
        </div>
    )

    const isUserAd = data.data.seller_id === user.telegram_id

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <AdHeader
                    title={data.data.title}
                    photo={baseUrl + data.data.photo_url}
                    name={data.data.seller_name}
                    rating={data.data.seller_rating}
                    sellerID={data.data.seller_id}
                    feedbacksCount={data.data.seller_review_number}
                />
                <AdContent description={data.data.description}/>
            </div>
            <div className={styles.footer}>
                <p className={styles.price}>{data.data.price} $</p>
                {!isUserAd && <Button onClick={() => onOpen(+(id ?? 0))}>Buy</Button>}
            </div>
        </div>
    )
}