import styles from './header.module.css'
import searchIcon from "../../../../assets/searchIcon.svg";
// import {useLaunchParams} from "@telegram-apps/sdk-react";
import {useMemo, useState} from "react";
import clsx from "clsx";
import {useNavigate} from "react-router-dom";
import {baseUrl} from "../../../../api/api.ts";
import {useUserContext} from "../../../../components/authWrapper/authWrapper.tsx";
import {useDebounce} from '@uidotdev/usehooks'
import {useSearchUser} from "../../../../api/queries/useSearchUser.tsx";
import {Feed} from "../../../../components/feed/feed.tsx";

export const MainHeader = () => {

    // const {initData} = useLaunchParams()

    const [searchData, setSearchData] = useState('');
    const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

    const debouncedSearchData = useDebounce(searchData, 300)

    const {data: userData} = useSearchUser(debouncedSearchData)

    const userList = useMemo(() => {
        if (!userData) return []
        return userData.data
    }, [userData])

    const navigate = useNavigate()

    const context = useUserContext()

    if (!context) return

    const {username, photo_url} = context.user

    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div
                    className={styles.contentLeft}
                    onClick={() => navigate('/profile')}
                >
                    <img src={baseUrl + photo_url} alt={'Аватар'} className={styles.avatar}/>
                    <p className={styles.nickname}>{username}</p>
                </div>

                <div className={clsx(styles.contentRight, {
                    [styles.searchActive]: debouncedSearchData.length && isSearchActive
                })}>
                    <input
                        placeholder={'Search'}
                        className={clsx(styles.search, {
                            [styles.searchDisabled]: debouncedSearchData.length && isSearchActive,
                        })}
                        onChange={(e) => {
                            setSearchData(e.target.value)
                            setIsSearchActive(true)
                        }}
                        onClick={() => debouncedSearchData.length && setIsSearchActive(true)}
                        onBlur={() => setTimeout(() => setIsSearchActive(false), 230)}
                    />
                    <img
                        src={searchIcon}
                        alt={'search'}
                        className={styles.searchIcon}
                    />
                    <div className={clsx(styles.searchResults, {
                        [styles.searchResultsActive]: debouncedSearchData.length && isSearchActive
                    })}>
                        {userList ?
                            userList.map(item => (
                                <div key={item.telegram_id}
                                     onClick={() => navigate(`/seller/${item.telegram_id}`)}
                                     className={styles.searchItem}
                                >
                                    <Feed
                                        rating={item.rating}
                                        feedbacks={item.review_number}
                                        className={styles.feed}
                                        starHeight={10}
                                        starWidth={10}
                                    />
                                    <img src={baseUrl + item.photo_url} alt={'avatar'} className={styles.searchItemIcon}/>
                                    <p className={styles.searchUsername}>{item.username}</p>
                                </div>
                            ))
                            :
                            <p>Nothing found</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}