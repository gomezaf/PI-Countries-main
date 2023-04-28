import React from "react";
import { useDispatch } from "react-redux";

import { getCountryByPopulation } from "../../actions";

export default function FilterByPopulation() {
  const dispatch = useDispatch();
  
  const handlerFilterByPopulation = (e) => {
    dispatch(getCountryByPopulation(e.target.value));
    console.log(e.target.value)
  };

  
  return (
    <div>
      <label htmlFor="population-filter">Countries by population</label>
      <select id="population-filter" onChange={(e) => handlerFilterByPopulation(e)}>
        <option>All countries</option>
        <option value="asc">major to minor</option>
        <option>minor to major</option>
      </select>
    </div>
  );
}