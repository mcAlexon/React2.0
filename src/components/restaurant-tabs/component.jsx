import { Tab } from "../tab/component";
import classNames from "classnames";
import styles from "./styles.module.scss"

export const RestaurantTabs = ({restaurants, onTabClick, currentIndex}) =>{
    return <div className={classNames(styles.root)}>
                {restaurants.map((restaurant, index) => (
                    <Tab title={restaurant.name} 
                    isActive={index === currentIndex} 
                    onClick={()=>onTabClick(index)}
                    />
                    ))}
            </div>;
} ;