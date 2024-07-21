import { Review } from "../review/component";
import classNames from "classnames";
import styles from "./styles.module.scss"

export const Reviews = ({reviews}) =>{
    return (<ul className={classNames(styles.root)}>
                {reviews.map((review)=>(
                    <li>
                        <Review review ={review}/>
                    </li>
                ))}
            </ul>
        );
};