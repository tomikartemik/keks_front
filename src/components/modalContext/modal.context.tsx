import {createContext, FC, PropsWithChildren, useCallback, useContext, useMemo, useState} from "react";

interface IModalContext {
    isOpen: boolean;
    onClose: () => void;
    onOpen: (id: number) => void;
    id: number;
}

const ModalContext = createContext<IModalContext>({
    isOpen: false,
    onOpen: () => {},
    onClose: () => {},
    id: 0
})

export const ModalsProvider: FC<PropsWithChildren> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState(0)

    const onOpen = useCallback((id: number) => {
        setIsOpen(true)
        setId(id)
    }, [setIsOpen, setId])

    const onClose = useCallback(() => {
        setIsOpen(false)
        setId(0)
    }, [setIsOpen, setId])

    const values = useMemo(() => ({
        isOpen,
        onClose,
        onOpen,
        id,
    }), [isOpen, onOpen, onClose, id])

    return (
        <ModalContext.Provider value={values}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalsContext = () => {
    return useContext(ModalContext)
}