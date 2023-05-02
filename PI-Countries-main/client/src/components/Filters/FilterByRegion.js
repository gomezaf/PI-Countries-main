import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCountryByRegion } from "../../actions";

export default function FilterByRegion() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);

  const handlerFilterByRegion = (e) => {
    dispatch(getCountryByRegion(e.target.value));
    console.log(e.target.value)
  };

  const selecRegions = (allCountries) => {
    const names = allCountries.map((el) => el.region);
    const uniqRegions = [...new Set(names)];
    const renderRegion = uniqRegions.map((el) => (
      <option value={el} key={el}>
        {el}
      </option>
    ));

    return renderRegion;
  };

  return (
    <div>
      <label htmlFor="Region-country">Countries by region</label>
      <select id="Region-country" onChange={(e) => handlerFilterByRegion(e)}>
        <option>All countries</option>
        {selecRegions(allCountries)}
      </select>
    </div>
  );
}
