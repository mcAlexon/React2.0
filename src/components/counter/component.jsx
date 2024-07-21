import { Button } from "../button/component";
import styles from './styles.module.scss';

const MIN_DISH = 0;
const MAX_DISH = 5;
export const Counter = ({value, decrement, increment, min = MIN_DISH, max = MAX_DISH}) => {
    return (<div>
        <div>
        <Button 
        onClick = {decrement} 
        disabled = {value <= min} 
        viewVariant="primary"
        className={styles.action}
        // size={SIZES.m}
        >-
        </Button>
        {value}
        <Button 
         onClick = {increment}
         disabled = {value >= max} 
         viewVariant="primary"
         className={styles.action}
        //  size={SIZES.l}
        
         >
            +
            </Button>
            </div>
    </div>)
}