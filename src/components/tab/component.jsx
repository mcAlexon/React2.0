import classNames from "classnames";
import styles from "./styles.module.scss"

export const Tab =({title, isActive, onClick})=>{
    return <button 
            onClick={onClick} 
            disabled={isActive}
            className={classNames(styles.root)}
            >
                    {title}
            </button>;
};