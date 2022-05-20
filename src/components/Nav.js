import React from "react";
import { Link } from "react-router-dom";

function Nav({cartLength}) {
    return (
        <nav>
            <div>
                <Link to="/">LYD</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="shopping-cart">Shopping Cart ({cartLength})</Link>
            </div>
        </nav>
    );
};

export default Nav;