import { restaurants } from './constants/mock';
import { Restaurant } from './components/restaurant/component';
import { Layout } from './components/layout/component';
import { useEffect, useState } from 'react';
import { RestaurantTabs } from './components/restaurant-tabs/component';
import { ThemeContext } from './contexts/theme';
import { UserContext } from './contexts/user';
import { Button } from './components/button/component';

const localStorageKeys = {
    CURRENT_RESTAURANT_INDEX: "current-restaurant-index"
}

export const App = () =>{ 
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(() => {
        return Number(localStorage.getItem(localStorageKeys.CURRENT_RESTAURANT_INDEX));
    });
    const currentRestaurant = restaurants[currentRestaurantIndex];
    const [user, setUser] = useState("");
    const userName = "Alexander Pavlov";
    const [theme, setTheme] = useState("default");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'default' ? 'dark' : 'default'));
    };

    useEffect(() => {
        localStorage.setItem(localStorageKeys.CURRENT_RESTAURANT_INDEX, currentRestaurantIndex);
    }, [currentRestaurantIndex]);
    return  (
    <ThemeContext.Provider value ={theme}>  
    <ThemeContext.Provider value="default">
        <UserContext.Provider value={userName}>
          <span style={{ padding: "0px 5px" }}>
            <button
              onClick={() => setTheme(theme === "default" ? "dark" : "default")}
            >
              <span>Theme - {theme}</span>
            </button>
          </span>
        </UserContext.Provider>
      </ThemeContext.Provider>
      <UserContext.Provider value={user.length > 0 ? "" : userName}>
        <span>
          <Button onClick={() => setUser(user === "" ? userName : "")}>
            Sign in
          </Button>
        </span>
      </UserContext.Provider>
      <UserContext.Provider value={user.length === 0 ? "" : userName}>
        <span>
          <Button onClick={() => setUser(user === "" ? userName : "")}>
            Sign out
          </Button>
          <span style={{ padding: "0px 5px" }}>{user}</span>
        </span>
      </UserContext.Provider>
        <Layout> 
        <UserContext.Provider value={userName}>
            <RestaurantTabs 
                restaurants={restaurants}
                currentIndex={currentRestaurantIndex}
                onTabClick={setCurrentRestaurantIndex}/>
                
                </UserContext.Provider> 
        <UserContext.Provider value={user}>
            {currentRestaurant ? <Restaurant restaurant={currentRestaurant} /> : ""}
        </UserContext.Provider>
            </Layout>
    </ThemeContext.Provider>
            );
}; 