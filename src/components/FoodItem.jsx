import React from "react";
import styles from "./food.module.css";
import FoodModal from "./FoodModal";

const FoodItem = ({ food, setSelectedFood }) => {
  return (
    <>
      <div className="col-12 col-md-4">
        <div className={styles.foodCard}>
          <h4>{food.title}</h4>
          <button
            type="button"
            className="btn btn-primary"
            // data-bs-toggle="modal"
            // data-bs-target={`#${food.id}`}
            onClick={() => {
              setSelectedFood(String(food.id));
            }}
          >
            View More
          </button>
          <div className={styles.foodImage}>
            <img src={food.image} alt={food.title} />
          </div>
          {/* <FoodModal food={food} key={`modal_${food.id}`} /> */}
        </div>
      </div>
    </>
  );
};

export default FoodItem;
