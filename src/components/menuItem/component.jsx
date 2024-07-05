import { Button } from "../button/component";

export const MenuItem = ({menuItem}) => {
    return <div>
                <div>Name: {menuItem.name}</div>
                <div>Price: {menuItem.price}</div>
                <div>Ingredients: {menuItem.ingredients}</div>
                <Button/>
            </div>          
};