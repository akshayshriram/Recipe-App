import React from "react";
import Search from "./Search";
import styles from "./banner.module.css";

const Banner = ({ foodData, setFoodData }) => {
  return (
    <>
      <section className={styles.banner}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-4">
              <h2>Find Out the Best Recipe...</h2>
              <p>
                "Discover diverse, irresistible recipes for all tastes and skill
                levels on our user-friendly app. Elevate your cooking game with
                clear instructions and stunning visuals. Unlock culinary
                excellence today!"
              </p>
              <Search foodData={foodData} setFoodData={setFoodData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
