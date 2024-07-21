import classNames from "classnames";
import styles from "./styles.module.scss";
import { SIZES } from "../../constants/size";
import { useContext } from "react";
import { ThemeContext} from "../../contexts/theme";
import { UserContext } from "../../contexts/user";

export const Button = ({children,
    onClick,
    disabled,
    className,
    viewVariant = "primary",
    size = SIZES.m,
    }) =>{
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);
    return (
    <button onClick={onClick} disabled={disabled} className={classNames
                (styles.root,
                className, 
                styles[size], 
                styles[viewVariant], {
                [styles.disabled]: disabled,    //Если True стиль применится
                [styles.dark]:theme === "dark",
                [styles.invisible]:user.length === 0,
               } )}>
                {children}
            </button>
            
            );
};