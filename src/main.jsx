import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from './constants/mock';

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(
  <div>
        <span>{restaurants[0].name}</span>
    
        <h3>Menu</h3>
        <ul className='Restaurant1'>
            <li>
                <div>Name: {restaurants[0].menu[0].name}</div>
                <div>Price: {restaurants[0].menu[0].price}</div>
                <div>Ingridients: {restaurants[0].menu[0].ingredients}</div>
            </li>
            <li>
                <div>Name: {restaurants[0].menu[1].name}</div>
                <div>Price: {restaurants[0].menu[1].price}</div>
                <div>Ingridients: {restaurants[0].menu[1].ingredients}</div>
            </li>
            <li>
                <div>Name: {restaurants[0].menu[2].name}</div>
                <div>Price: {restaurants[0].menu[2].price}</div>
                <div>Ingridients: {restaurants[0].menu[2].ingredients}</div>
            </li>
            <ul className='reviews'>
                <li>
                    <h2>Reviews</h2>
                    <div>User: {restaurants[0].reviews[0].user}</div>
                    <div>Text: {restaurants[0].reviews[0].text}</div>
                    <div>rating: {restaurants[0].reviews[0].rating}</div>
                </li>
                <li>
                    <h2>Reviews</h2>
                    <div>User: {restaurants[0].reviews[1].user}</div>
                    <div>Text: {restaurants[0].reviews[1].text}</div>
                    <div>rating: {restaurants[0].reviews[1].rating}</div>
                </li>
            </ul>
        </ul>
        <span>{restaurants[1].name}</span>
        <h3>Menu</h3>
        <ul className='Restaurant2'>
            <li>
                <div>Name: {restaurants[1].menu[0].name}</div>
                <div>Price: {restaurants[1].menu[0].price}</div>
                <div>Ingridients: {restaurants[1].menu[0].ingredients}</div>
            </li>
            <li>
                <div>Name: {restaurants[1].menu[1].name}</div>
                <div>Price: {restaurants[1].menu[1].price}</div>
                <div>Ingridients: {restaurants[1].menu[1].ingredients}</div>
            </li>
            <ul className='reviews'>
                <li>
                    <h2>Reviews</h2>
                    <div>User: {restaurants[1].reviews[0].user}</div>
                    <div>Text: {restaurants[1].reviews[0].text}</div>
                    <div>rating: {restaurants[1].reviews[0].rating}</div>
                </li>
                <li>
                    <h2>Reviews</h2>
                    <div>User: {restaurants[1].reviews[1].user}</div>
                    <div>Text: {restaurants[1].reviews[1].text}</div>
                    <div>rating: {restaurants[1].reviews[1].rating}</div>
                </li>
                <li>
                    <h2>Reviews</h2>
                    <div>User: {restaurants[1].reviews[2].user}</div>
                    <div>Text: {restaurants[1].reviews[2].text}</div>
                    <div>rating: {restaurants[1].reviews[2].rating}</div>
                </li>
            </ul>
        </ul>
        <span>{restaurants[2].name}</span>
        <h3>Menu</h3>
        <ul className='Restaurant3'>
            <li>
                <div>Name: {restaurants[2].menu[0].name}</div>
                <div>Price: {restaurants[2].menu[0].price}</div>
                <div>Ingridients: {restaurants[2].menu[0].ingredients}</div>
            </li>
            <li>
                <div>Name: {restaurants[2].menu[1].name}</div>
                <div>Price: {restaurants[2].menu[1].price}</div>
                <div>Ingridients: {restaurants[2].menu[1].ingredients}</div>
            </li>
            <li>
                <div>Name: {restaurants[2].menu[2].name}</div>
                <div>Price: {restaurants[2].menu[2].price}</div>
                <div>Ingridients: {restaurants[2].menu[2].ingredients}</div>
            </li>
            <ul className='reviews'>
                <li>
                    <h2>Reviews</h2>
                    <div>User: {restaurants[2].reviews[0].user}</div>
                    <div>Text: {restaurants[2].reviews[0].text}</div>
                    <div>rating: {restaurants[2].reviews[0].rating}</div>
                </li>
            </ul>
        </ul>
        <span>{restaurants[3].name}</span>
        <h3>Menu</h3>
        <ul className='Restaurant4'>
            <li>
                <div>Name: {restaurants[3].menu[0].name}</div>
                <div>Price: {restaurants[3].menu[0].price}</div>
                <div>Ingridients: {restaurants[3].menu[0].ingredients}</div>
            </li>
            <li>
                <div>Name: {restaurants[3].menu[1].name}</div>
                <div>Price: {restaurants[3].menu[1].price}</div>
                <div>Ingridients: {restaurants[3].menu[1].ingredients}</div>
            </li>
            <ul className='reviews'>
                <li>
                    <h2>Reviews</h2>
                    <div>User: {restaurants[3].reviews[0].user}</div>
                    <div>Text: {restaurants[3].reviews[0].text}</div>
                    <div>rating: {restaurants[3].reviews[0].rating}</div>
                </li>
                <li>
                    <h2>Reviews</h2>
                    <div>User: {restaurants[3].reviews[1].user}</div>
                    <div>Text: {restaurants[3].reviews[1].text}</div>
                    <div>rating: {restaurants[3].reviews[1].rating}</div>
                </li>
            </ul>
        </ul>
    </div>
);
