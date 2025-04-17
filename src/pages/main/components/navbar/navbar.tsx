import {FC} from "react";
import Carousel from "../../../../components/ui/carousel/carousel.tsx";

interface IOption {
    label: string
    value: number
}

interface IProps {
    categories: IOption[]
    selectedCategory: IOption
    setSelectedCategory: (value: IOption) => void
}

export const Navbar: FC<IProps> = ({categories, setSelectedCategory, selectedCategory}) => {
    return (
        <Carousel
            options={categories}
            selected={selectedCategory}
            onClick={setSelectedCategory}
        />
    )
}