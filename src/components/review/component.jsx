import classNames from "classnames";
import styles from "./styles.module.scss"

export const Review = ({review}) => {
    return <div className={classNames(styles.root)}>
                <div>User: {review.user}</div>
                <div>Text: {review.text}</div>
                <div>Rating: {review.rating}</div>
        </div>
};