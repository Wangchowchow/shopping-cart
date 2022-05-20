import React from "react";
import { useState } from "react";

function Item({ name, price, src, add }) {
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        setQuantity((quantity+1));
    };
    const decrease = () => {
        if (quantity === 1) setQuantity(1);
        else setQuantity((quantity-1));
    };
    const addToCart = () => {
        const item = { name, price, quantity, src };
        add(item);
    };

    return (
        <div className="item-container">
            <h3>{name}</h3>
            <img src={src} alt={name}></img>
            <h4>${price}</h4>
            <div>
                <div>
                    <button onClick={addToCart}>Add to Cart</button>
                </div>
                <div>
                    <button onClick={decrease}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increase}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Item;