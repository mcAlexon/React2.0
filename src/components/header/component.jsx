import classNames from "classnames";
import styles from "./styles.module.scss";


export const Header =()=>{
    return <header className={classNames(styles.root)}>
                <div>Restaurants</div>
            </header>;
};
