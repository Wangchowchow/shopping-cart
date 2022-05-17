import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import Nav from "./components/Nav";

import './App.css';

function App() {
    const [cart, setCart] = useState([]);

    const add = (newItem) => {
        let isDuplicate = false;
    
        cart.forEach((cartItem, i) => {
            if (newItem.name === cartItem.name) {
                const newCart = [...cart];
                const updateItem = newCart[i];
                updateItem.quantity += newItem.quantity;
                newCart[i] = updateItem;
                setCart(newCart);
                isDuplicate = true;
            }
        });

        if (!isDuplicate) {
            setCart((prevCart) => {
                return [...prevCart, newItem];
            });
        }
    };

    const remove = (item) => {
        const newCart = [...cart];
        newCart.forEach((cartItem, i) => {
            if (item === cartItem.name) {
                newCart.splice(i, 1);
            }
        });

        setCart(newCart);
    };

    const emptyCart = () => {
        setCart([]);
    }

    useEffect(() => { }, [cart]);

    return (
        <BrowserRouter>
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/products" element={<Products add={add}></Products>}></Route>
                <Route path="/shopping-cart" element={<ShoppingCart items={cart} remove={remove} emptyCart={emptyCart}></ShoppingCart>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
