import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Banner from "./components/Banner";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <div className="">
        <Nav />
        <Banner foodData={foodData} setFoodData={setFoodData} />
        <FoodList foodData={foodData} />
      </div>
    </>
  );
}

export default App;
