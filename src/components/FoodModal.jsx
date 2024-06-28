import React, { useEffect, useState } from "react";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

const FoodModal = ({ selectedFood, setSelectedFood }) => {
  const [selectedFoodData, setSelectedFoodData] = useState({});
  console.log("selectedFood: ", selectedFood);
  useEffect(() => {
    async function FoodItemDetails() {
      const res = await fetch(
        `${BASE_URL}recipes/${selectedFood}/information/?apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const data = await res.json();
      console.log(data);
      setSelectedFoodData(data);
    }
    FoodItemDetails();
  }, [selectedFood]);
  console.log("selectedFoodData", selectedFoodData);

  return (
    <div>
      <div
        className="modal fade"
        id={`${selectedFood}`} // Corrected here
        tabIndex="-1" // Corrected here
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {/* {selectedFoodData.title} */}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <img src={selectedFoodData.image} alt={selectedFoodData.title} /> */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
