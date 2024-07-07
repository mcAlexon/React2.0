const MIN_DISH = 0;
const MAX_DISH = 5;
export const Counter = ({value, decrement, increment, min = MIN_DISH, max = MAX_DISH}) => {
    return (<div>
        <button onClick = {decrement} disabled = {value <= min}>-</button>
        {value}
        <button onClick = {increment} disabled = {value >= max}>+</button>
    </div>)
}