import { Menu } from "../menu/component";
import { Reviews } from "../reviews/components";
import classNames from "classnames";
import styles from "./styles.module.scss"

export const Restaurant = ({restaurant}) => {
    if(!restaurant){
        return null;
    }
    const {name, menu, reviews} = restaurant
    return(
        <div>
            <h2>{name}</h2>
            {!!menu?.length &&(<div>
                <h3>Menu</h3>
                <Menu menu={menu}/>
            </div>)}
            {!!reviews?.length &&(
                <div className={classNames(styles.root)}>
                <h3 className={classNames(styles.h3Reviews)}>Reviews</h3>
                <Reviews reviews={reviews}/>
            </div>)}
        </div>
    );
};