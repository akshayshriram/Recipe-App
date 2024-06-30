import { useState, useEffect } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Banner from "./components/Banner";
import FoodModal from "./components/FoodModal";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [selectedFood, setSelectedFood] = useState();
  const [error, setError] = useState("");
  const [searchInitiated, setSearchInitiated] = useState(false);

  return (
    <>
      <div className="">
        <Nav />
        <Banner
          foodData={foodData}
          setFoodData={setFoodData}
          setError={setError}
          setSearchInitiated={setSearchInitiated}
        />
        <FoodList
          foodData={foodData}
          setSelectedFood={setSelectedFood}
          error={error}
          searchInitiated={searchInitiated}
          // onShowModal={handleShowModal}
        />
        {selectedFood && (
          <FoodModal
            selectedFood={selectedFood}
            setSelectedFood={setSelectedFood}
            // handleClose={handleCloseModal}
          />
        )}
      </div>
    </>
  );
}

export default App;
