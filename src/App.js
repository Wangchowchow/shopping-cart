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
        setCart((item) => [...item, newItem]);
    };

    return (
        <BrowserRouter>
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/products" element={<Products></Products>}></Route>
                <Route path="/shopping-cart" element={<ShoppingCart></ShoppingCart>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
