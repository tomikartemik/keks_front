import styles from "./feed.module.css";
import starIcon from "../../assets/star.svg";
import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import clsx from "clsx";

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    rating: number;
    feedbacks: number;
    starWidth?: number;
    starHeight?: number;
}

export const Feed: FC<IProps> = ({rating, feedbacks, starHeight, starWidth, ...props}) => {
    return (
        <div {...props} className={clsx(styles.feed, props.className)}>
            <p style={{color: '#FFF8E7'}}>
                {rating}
            </p>
            <span>
                ({feedbacks})
            </span>
            <img
                src={starIcon}
                alt={'rating'}
                width={starWidth || 14}
                height={starHeight || 14}
            />
        </div>
    )
}
