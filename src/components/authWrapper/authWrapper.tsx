import {createContext, FC, PropsWithChildren, useContext} from "react";
import {IUser} from "../../api/api.types.ts";
import {useGetUserById} from "../../api/queries/useGetUserById.tsx";
// import {useLaunchParams} from "@telegram-apps/sdk-react";

interface IAuthContext {
    user: IUser;
    isLoading: boolean;
}

const initialState: IUser = {
    telegram_id: 0,
    username: '',
    photo_url: '',
    balance: 0,
    ads: [],
    purchased: [],
    rating: 0,
    review_number: 0,
}

const AuthContext = createContext<IAuthContext>({
    user: initialState,
    isLoading: false,
})

export const AuthWrapper: FC<PropsWithChildren> = ({children}) => {
    // const {initData} = useLaunchParams()

    // const {data, isLoading} = useGetUserById(initData?.user?.id ?? 0)
    const {data, isLoading} = useGetUserById( 663184248)

    return (
        <AuthContext.Provider value={{
            user: data?.data || initialState,
            isLoading: isLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(AuthContext)
}