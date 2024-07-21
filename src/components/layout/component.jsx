import { Footer } from "../footer/component";
import { Header } from "../header/component";
import styles from "./styles.module.scss"
import classNames from "classnames";

export const Layout = ({children}) => {
    return <div className={classNames(styles.root)}>
        <Header/>
        <div className={classNames(styles.main)}>
            {children}
        </div>
        <Footer/>
    </div>;
};