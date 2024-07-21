import { MenuItem } from "../menuItem/component";
import classNames from "classnames";
import styles from "./styles.module.scss"

export const Menu = ({menu}) => {
    return (<ul className={classNames(styles.root)}>
                {menu.map((menuItem) => (
                    <li>
                        <MenuItem menuItem ={menuItem}/>
                    </li>
                ))}
            </ul>
    );
};