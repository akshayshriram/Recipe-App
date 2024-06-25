import React, { useEffect, useState } from "react";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("pizza");
  function handleSubmit(e) {
    e.preventDefault();
  }
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${BASE_URL}?query=${query}&apiKey=${import.meta.env.VITE_API_KEY}`
      );
      const data = await res.json();
      //   console.log(data.results);
      setFoodData(data.results);
    }
    fetchData();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" onSubmit={(e) => handleSubmit(e)}>
        Search
      </button>
    </div>
  );
};

export default Search;
