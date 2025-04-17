import styles from './paymentResult.module.css'
import {useLocation} from "react-router-dom";

export const PaymentResultPage = () => {
    const {pathname} = useLocation()

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <p className={styles.message}>
                    {pathname.includes('failed') ?
                        "The payment was declined"
                        : 'The payment was completed successfully'
                    }
                </p>
            </div>
            {/*<div className={styles.footer}>*/}
            {/*    <p className={styles.price}>{data.data.price} $</p>*/}
            {/*    {!isUserAd && <Button onClick={() => onOpen(+(id ?? 0))}>Buy</Button>}*/}
            {/*</div>*/}
        </div>
    )
}