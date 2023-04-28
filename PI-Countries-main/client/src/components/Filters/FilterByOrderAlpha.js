import React from "react";
import { useDispatch } from "react-redux";

import { getCountryByOrderAlpha } from "../../actions";


export default function FilterByOrderAlpha() {
    const dispatch = useDispatch()

    const handlerFilterByName = (e) => {
        dispatch(getCountryByOrderAlpha(e.target.value));
        console.log(e.target.value);
    }

  return (
    <div>
      <label htmlFor="filter-alphabetic">filter by alphabetical order </label>
      <select id="filter-alphabetic" onChange={(e) => handlerFilterByName(e)}>
        <option>All pokemons</option>
        <option value="asc">major to minor</option>
        <option>minor to major</option>
      </select>
    </div>
  );
}