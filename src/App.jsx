import { restaurants } from './constants/mock';
import { Restaurant } from './components/restaurant/component';
import { Layout } from './components/layout/component';
import { useEffect, useState } from 'react';
import { RestaurantTabs } from './components/restaurant-tabs/component';

const localStorageKeys = {
    CURRENT_RESTAURANT_INDEX: "current-restaurant-index"
}

export const App = () =>{ 
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(() => {
        return Number(localStorage.getItem(localStorageKeys.CURRENT_RESTAURANT_INDEX));
    });
    const currentRestaurant = restaurants[currentRestaurantIndex];

    useEffect(() => {
        localStorage.setItem(localStorageKeys.CURRENT_RESTAURANT_INDEX, currentRestaurantIndex);
    }, [currentRestaurantIndex]);

    return<Layout>   
            <RestaurantTabs 
                restaurants={restaurants}
                currentIndex={currentRestaurantIndex}
                onTabClick={setCurrentRestaurantIndex}/>
                {currentRestaurant && <Restaurant restaurant={currentRestaurant}/>}   
    </Layout>;
}; 