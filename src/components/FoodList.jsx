import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ foodData }) => {
  return (
    <div>
      {foodData.map((food) => (
        // {console.log(item)}
        <FoodItem food={food} key={food.id} />
      ))}
    </div>
  );
};

export default FoodList;
