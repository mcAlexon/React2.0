import { Counter } from "../counter/component";
import { UseCounter } from "../hooks/use_counter";


export const MenuItem = ({menuItem}) => {
    const {count, increment, decrement} = UseCounter();
    return <div>
                <div>Name: {menuItem.name}</div>
                <div>Price: {menuItem.price}</div>
                <div>Ingredients: {menuItem.ingredients}</div>  
                <Counter value = {count} decrement = {decrement} increment = {increment}/>
            </div>          
}; 