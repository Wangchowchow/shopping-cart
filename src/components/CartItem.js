import React from "react";

function CartItem({ src, name, price, quantity, remove }) {
    return (
        <div className="cart-item-container">
            <h3>{name}</h3>
            <img src={src} alt={name}></img>
            <p>${ price } x { quantity }</p>
            <button onClick={remove(name)}>Remove</button>
        </div>
    );
};

export default CartItem;