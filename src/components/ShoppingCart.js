import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function ShoppingCart({ items, remove, emptyCart }) {
    let total = 0;

    for(let i = 0; i < items.length; i++) {
        const quantity = items[i].quantity;
        const price = items[i].price;
        total+= quantity * price;
    }

    return (
        <div className="shopping-cart-page">
            <h1>Shopping Cart</h1>
            <div className="shopping-cart-container">
                {items.map((item) => (
                    <CartItem
                        key={item.name}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        src={item.src}
                        remove={remove}
                        ></CartItem>
                ))}
            </div>
            <p>Total: ${total}</p>
            <Link to="/"><button onClick={() => emptyCart()}>Purchase</button></Link>
        </div>
    )
}

export default ShoppingCart;