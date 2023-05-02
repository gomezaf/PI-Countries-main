import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCountryByOrderAlpha, getCountries} from "../../actions";


export default function FilterByOrderAlpha() {
  const allCountries = useSelector((state)=> state.countries)
    const dispatch = useDispatch()

    console.log(allCountries)

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