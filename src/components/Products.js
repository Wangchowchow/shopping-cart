import React from "react";
import Item from "./Item";

import dogBall from "../assets/dogball.jpeg";
import dogBone from "../assets/dogbone.jpeg";
import dogBowl from "../assets/dogbowl.jpg";
import dogBrush from "../assets/dogbrush.jpeg";
import dogCollar from "../assets/dogcollar.webp";
import dogHouse from "../assets/doghouse.jpg";
import dogLeash from "../assets/dogleash.jpg";
import dogSofa from "../assets/dogsofa.jpg";

function Products({ add }) {
    return (
        <div className="products-page">
            <h1>Grab Them Now!</h1>
            <div className="products-container">
                <Item name="Dog Ball" price={10} src={dogBall} add={add}></Item>
                <Item name="Dog Bone" price={20} src={dogBone} add={add}></Item>
                <Item name="Dog Bowl" price={25} src={dogBowl} add={add}></Item>
                <Item name="Dog Brush" price={15} src={dogBrush} add={add}></Item>
                <Item name="Dog Collar" price={10} src={dogCollar} add={add}></Item>
                <Item name="Dog House" price={70} src={dogHouse} add={add}></Item>
                <Item name="Dog Leash" price={20} src={dogLeash} add={add}></Item>
                <Item name="Dog Sofa" price={75} src={dogSofa} add={add}></Item>
            </div>
        </div>
    );
};

export default Products;