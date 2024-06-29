import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ foodData, setSelectedFood }) => {
  return (
    <section className="FoodList">
      <div className="container">
        <div className="row">
          {foodData &&
            foodData.map((food) => (
              // {console.log(item)}

              <FoodItem
                food={food}
                setSelectedFood={setSelectedFood}
                key={food.id}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FoodList;
