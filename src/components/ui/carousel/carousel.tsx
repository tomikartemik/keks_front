import {FC} from 'react';
import clsx from 'clsx';
import styles from './carousel.module.css';
import {Swiper, SwiperSlide} from "swiper/react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css';

interface IOption {
    label: string
    value: number
}

interface IProps {
    options: IOption[]
    selected: IOption
    onClick: (value: IOption) => void
    slidesPerView?: number
}

const Carousel: FC<IProps> = ({
                                  options,
                                  selected,
                                  onClick,
                                  slidesPerView = 3
                              }) => {

    return (
        <div
            className={styles.root}
        >
            <Swiper
                slidesPerView={slidesPerView}
                className={styles.carousel}
                spaceBetween={0}
            >
                {
                    options.map(item => (
                        <SwiperSlide
                            key={item.value}
                            onClick={() => onClick(item)}
                            className={clsx(styles.carouselButton, {
                                [styles.carouselButtonDisabled]: selected.value !== item.value,
                                [styles.carouselButtonActive]: selected.value === item.value
                            })}
                        >
                            {item.label}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
};

export default Carousel;