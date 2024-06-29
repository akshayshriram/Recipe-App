import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MdPeopleAlt, MdAccessTimeFilled } from "react-icons/md";
import { TbHealthRecognition } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import styles from "./foodmodal.module.css";

const FoodModal = ({ selectedFood, setSelectedFood }) => {
  const [selectedFoodData, setSelectedFoodData] = useState(null);
  const BASE_URL = "https://api.spoonacular.com/"; // Update BASE_URL as needed

  useEffect(() => {
    console.log(selectedFood);
    async function fetchFoodItemDetails() {
      if (selectedFood) {
        const res = await fetch(
          `${BASE_URL}recipes/${selectedFood}/information/?apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const data = await res.json();
        setSelectedFoodData(data);
      }
    }
    fetchFoodItemDetails();
  }, [selectedFood]);

  const handleClose = () => {
    setSelectedFood(null);
    setSelectedFoodData(null);
  };

  if (!selectedFood) return null;

  return (
    <div
      className="modal fade show"
      id="foodModal"
      tabIndex="-1"
      aria-labelledby="foodModalLabel"
      aria-hidden="true"
      style={{
        display: "block",
        backdropFilter: "blur(3px)",
        background: "rgba(0, 0, 0,0.28)",
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="foodModalLabel">
              {selectedFoodData?.title || "Loading..."}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            {selectedFoodData ? (
              <>
                <img
                  src={selectedFoodData.image}
                  alt={selectedFoodData.title}
                  className="w-100 border-rounded"
                  style={{ borderRadius: "10px" }}
                />
                <h3 className="mt-3 d-flex gap-2">
                  Servings:{" "}
                  <span className="d-flex align-items-center gap-2">
                    <MdPeopleAlt />
                    {selectedFoodData.servings} People
                  </span>
                </h3>
                <h3 className="mt-3 d-flex gap-2">
                  Preparation:
                  <span className="d-flex align-items-center gap-2">
                    <MdAccessTimeFilled />
                    {selectedFoodData.readyInMinutes} minutes
                  </span>
                </h3>
                <h3 className="mt-3 d-flex gap-2">
                  Health Card:
                  <span className="d-flex align-items-center gap-2">
                    <TbHealthRecognition />
                    {selectedFoodData.healthScore}
                  </span>
                </h3>
                <h3 className="mt-3 d-flex gap-2">
                  Per Serving:
                  <span className="d-flex align-items-center gap-2">
                    <RiMoneyDollarCircleFill />
                    {(selectedFoodData.pricePerServing / 100).toFixed(2)}
                  </span>
                </h3>

                {selectedFoodData.extendedIngredients.map((item) => (
                  <div className={styles.foodModalCard}>
                    <img
                      src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
                      alt={item.aisle}
                    />
                    <div className="d-flex flex-column justify-content-center align-items center gap-3">
                      <h3 className="m-0">{item.name}</h3>
                      <p className="m-0">
                        {item.measures.metric.amount}{" "}
                        {item.measures.metric.unitLong}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="accordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Instructions :
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body p-0">
                        <ul className="list-group">
                          {selectedFoodData.analyzedInstructions[0].steps.map(
                            (item) => (
                              <li className="list-group-item">{item.step}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

FoodModal.propTypes = {
  selectedFood: PropTypes.string,
  setSelectedFood: PropTypes.func.isRequired,
};

export default FoodModal;
