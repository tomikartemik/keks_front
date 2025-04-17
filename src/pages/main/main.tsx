import styles from './main.module.css'
import {MainHeader} from "./components/header/header.tsx";
import {Navbar} from "./components/navbar/navbar.tsx";
import {Content} from "../../components/content/content.tsx";
import {useGetAdList} from "../../api/queries/useGetAdList.tsx";
import {useGetCategoriesQuery} from "../../api/queries/useGetCategoriesQuery.tsx";
import {useEffect, useMemo, useState} from "react";

export const MainPage = () => {
    const {data: categoriesData} = useGetCategoriesQuery()

    const categories = useMemo(() => {
        if (!categoriesData) return []
        return categoriesData.data.map(item => ({
            label: item.name,
            value: item.id,
        }))
    }, [categoriesData])

    const [selectedCategory, setSelectedCategory] = useState({
        label: categories.length ? categories[0].label : '',
        value: categories.length ? categories[0].value : 0,
    })

    useEffect(() => {
        if (categories.length) {
            setSelectedCategory(categories[0])
        }
    }, [categories]);

    const {data, isLoading} = useGetAdList(selectedCategory.value)

    return (
        <div className={styles.root}>
            <div className={styles.layout}>
                <MainHeader />
                <Navbar categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                <Content data={data?.data} isLoading={isLoading}/>
            </div>
        </div>
    )
}