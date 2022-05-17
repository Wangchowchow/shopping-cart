import React from "react";
import { Link } from "react-router-dom";

import siberianHusky from "../assets/siberianhusky.jpeg"

function Home() {
    return (
        <div className="home-page">
            <h1>Love Your Doggo</h1>
            <img src={siberianHusky} alt="dog"></img>
            <h2>Show affection to your beloved doggo!</h2>
            <p>One stop solution for all your doggo needs</p>
            <p>Note: Best deal ends today, free shipping with no minimum spend.</p>
            <Link to="/products">Start Shopping</Link>
        </div>
    )
}

export default Home;