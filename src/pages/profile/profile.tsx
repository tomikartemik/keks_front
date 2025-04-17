import styles from './profile.module.css'
import {ProfileHeader} from "./components/header/header.tsx";
import {ProfileNavbar} from "./components/navbar/navbar.tsx";
import {Content} from "../../components/content/content.tsx";
import {useMemo, useState} from "react";
import {useUserContext} from "../../components/authWrapper/authWrapper.tsx";

type TContext = 'ads' | 'purchased'

export const ProfilePage = () => {
    const [context, setContext] = useState<TContext>('ads')

    const user = useUserContext()

    const data = useMemo(() => {
        if (!user) return []
        else if (context === 'ads') {
            return user.user.ads
        } else {
            return user.user.purchased
        }
    }, [user, context])

    return (
        <div className={styles.root}>
            <div className={styles.layout}>
                <ProfileHeader
                    type={'personal'}
                    user={user.user}
                />
                <ProfileNavbar context={context} setContext={setContext}/>
                <Content
                    hideFeed
                    data={data}
                    isLoading={user.isLoading}
                />
            </div>
        </div>
    )
}