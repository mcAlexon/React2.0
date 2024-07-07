import { useCallback, useState } from "react";
export const UseCounter = ({defaultValue = 0, step = 1} ={}) =>{

        const [count, setCount] = useState(defaultValue);
    
        const decrement = useCallback(
            () => setCount((currentCount) => currentCount - step),
            [step]);
        const increment = useCallback(
            () => setCount((currentCount) => currentCount + step),
            [step]);
        return {count, decrement, increment}   
};