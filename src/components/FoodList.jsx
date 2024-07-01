import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ foodData, setSelectedFood, error, searchInitiated }) => {
  return (
    <section className="FoodList my-5">
      <div className="container">
        <div className="row">
          {error ? (
            <h2>{error}</h2>
          ) : foodData && foodData.length > 0 ? (
            foodData.map((food) => (
              <FoodItem
                food={food}
                setSelectedFood={setSelectedFood}
                key={food.id}
              />
            ))
          ) : (
            searchInitiated && (
              <h2>
                No food item found. Please search for another food. Example:
                Paneer
              </h2>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FoodList;
