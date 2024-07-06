export const Tab =({title, isActive, onClick})=>{
    return <button onClick={onClick} disabled={isActive}>
        {title}
        {isActive && "-Active"} 
        </button>;
};