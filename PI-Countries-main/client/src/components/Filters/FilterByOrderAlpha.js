import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCountryByOrderAlpha } from "../../actions";


export default function FilterByOrderAlpha() {
 
    const dispatch = useDispatch()

    const handlerFilterByName = (e) => {
        e.preventDefault();
        dispatch(getCountryByOrderAlpha(e.target.value));
    }

  return (
    <div>
      <label htmlFor="filter-alphabetic">Filter by alphabetical order </label>
      <select id="filter-alphabetic" onChange={(e) => handlerFilterByName(e)}>
        <option >All countries</option>
        <option value="asc">A - Z</option>
        <option value="des">Z - A</option>
      </select>
    </div>
  );
}