import {FC} from "react";
import styles from './styles.module.css'
import {Button} from "../../ui/button/button.tsx";
import {useGetAdById} from "../../../api/queries/useGetAdById.tsx";
import {baseUrl} from "../../../api/api.ts";
import {usePurchaseMutation} from "../../../api/queries/usePurchaseMutation.tsx";
import {useUserContext} from "../../authWrapper/authWrapper.tsx";
import axios from "axios";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    id: number;
}

export const ConfirmPurchaseModal:FC<IProps> = ({isOpen, onClose, id}) => {

    const {data} = useGetAdById(id)

    const {mutateAsync} = usePurchaseMutation()

    const {user} = useUserContext()

    const handlePurchase = async () => {
        try {
            const res = await mutateAsync({
                ad_id: id,
                telegram_id: user.telegram_id,
            })

            alert(res.data.message)
        } catch (e) {
            if (axios.isAxiosError(e)) {
                alert(e?.response?.data.message)
            }
        } finally {
            onClose()

        }
    }

    if (!isOpen || !data?.data) return

    return (
        <dialog open={isOpen} className={styles.root} onClick={onClose}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                <p className={styles.title}>Order</p>
                <div className={styles.info}>
                    <img
                        className={styles.photo}
                        alt={'Photo'}
                        src={baseUrl + data.data.photo_url}
                    />
                    <p className={styles.name}>{data.data.title}</p>
                    <p className={styles.price}>{data.data.price} $</p>
                </div>
                <div className={styles.controls}>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button variant={'secondary'} onClick={handlePurchase}>Confirm</Button>
                </div>
            </div>
        </dialog>
    )
}