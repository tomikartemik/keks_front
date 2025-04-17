import styles from './profile.module.css'
import {ProfileHeader} from "./components/header/header.tsx";
import {Content} from "../../components/content/content.tsx";
import {useGetUserAsSeller} from "../../api/queries/useGetUserAsSeller.tsx";
import {useParams} from "react-router-dom";

export const SellerProfilePage = () => {
    const {id} = useParams()

    const {data, isLoading} = useGetUserAsSeller(+(id ?? 0))

    return (
        <div className={styles.root}>
            <div className={styles.layout}>
                {data?.data &&
                    <ProfileHeader
                        type={'public'}
                        user={data?.data}
                    />
                }
                <Content
                    hideFeed
                    data={data?.data.ads}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}