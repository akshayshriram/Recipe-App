import React, { useEffect, useState } from "react";
import axios from "axios";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

const Search = ({ foodData, setFoodData, setError, setSearchInitiated }) => {
  const [query, setQuery] = useState("");
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    if (fetchData) {
      async function getData() {
        try {
          const res = await axios.get(`${BASE_URL}/recipes/complexSearch`, {
            params: {
              query: query,
              apiKey: import.meta.env.VITE_API_KEY,
            },
          });

          setFoodData(res.data.results);
          setError("");
        } catch (error) {
          console.error("Error fetching data:", error);
          setError("Daily limit API Exhausted...");
        }
      }
      getData();
      setFetchData(false);
      setSearchInitiated(true);
    }
  }, [fetchData]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setFetchData(true);
  };

  return (
    <div>
      <input
        type="text"
        className="form-control bg-gradient bg-warning"
        placeholder="Search Recipe Here... Paneer"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
