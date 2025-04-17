import {ConfirmPurchaseModal} from "./confirmPurchase/confirmPurchaseModal.tsx";
import {useModalsContext} from "../modalContext/modal.context.tsx";

export const Modals = () => {

    const {isOpen, onClose, id} = useModalsContext()

    return (
        <>
            <ConfirmPurchaseModal isOpen={isOpen} onClose={onClose} id={id}/>
        </>
    )
}