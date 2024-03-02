import React from "react";
import { Burger, Fries, Pizza, Pasta } from "./FoodList";
import Navigation from "../Components/Navigation";

const FoodItems = () => {
  return (<>
    <Navigation></Navigation>
    <Pizza></Pizza>
    <Pasta></Pasta>
    <Fries></Fries>
    <Burger></Burger>


  </>)
}

export default FoodItems;