// simple app for rendering multiple items
import {createRoot} from 'react-dom/client';
import { useState, useEffect } from 'react';
import './styles.css';

const root = createRoot(document.getElementById('root'));


function Carts(){
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
        fetch('https://dummyjson.com/carts')
        .then(res => res.json())
        .then(data => setCartItems(data.carts));
    }, [])

    return (
        <div id='cart-items'>
            {cartItems.map((cart, i) => (
                <div key={cart.id || i}>
                    <h2>Cart {cart.id}</h2>
                    <ul>
                        {cart.products.map(product => (
                            <li key={product.id}>
                                <div id='card-prod'>
                                    <img src={product.thumbnail}></img> 
                                     {product.title} - ${product.price} (Qty: {product.quantity})
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}



root.render(<Carts></Carts>);