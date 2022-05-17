import React from "react";
import { Link } from "react-router-dom";

function Nav({cartLength}) {
    return (
        <nav>
            <Link to="/">LYD</Link>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="shopping-cart">Shopping Cart ({cartLength})</Link>
        </nav>
    );
};

export default Nav;