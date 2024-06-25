import React from "react";

const FoodItem = ({ food }) => {
  return (
    <>
      <img src={food.image} alt={food.title} />
      <p>{food.title}</p>
    </>
  );
};

export default FoodItem;
