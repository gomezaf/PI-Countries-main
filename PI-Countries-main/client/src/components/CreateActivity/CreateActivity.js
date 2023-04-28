import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { postActivity } from "../../actions/index";

export default function CreateActivity() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allCountries = useSelector((state) => state.allCountries);

  const [input, setInput] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    country: [],
    city: "no se",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelect(e) {
    setInput({
      ...input,
      country: [...input.country, e.target.value],
    });
  }

  let search;

  function renderCountries(allCountries, search) {
    let countriesNames = [];
    allCountries.map((el) => {
      countriesNames.push(el.name);
    });

    countriesNames.filter((el) => el === search);
    return countriesNames.map((el) => <option value={el}>{el}</option>);
  }

  function handleChangeInputCountry(e) {
    search = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(postActivity(input));
    alert("que chimba ome");
    setInput({
      name: "",
      dificulty: "",
      duration: "",
      season: "",
      country: [],
      city: "no se",
    });
    history.push("/home");
  }

  return (
    <div>
      <Link to="/home">
        <button>volver</button>
      </Link>
      <h1>crea tu activity</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>name</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>dificulty</label>
          <input
            type="text"
            value={input.dificulty}
            name="dificulty"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>duration</label>
          <input
            type="text"
            value={input.duration}
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>season</label>
          <input
            type="text"
            value={input.season}
            name="season"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>country</label>
          <select onChange={handleSelect}>
            <input
              type="text"
              name="country"
              onChange={handleChangeInputCountry}
            />
            {renderCountries(allCountries, search)}
          </select>
        </div>
        <button type="submit">crear</button>
      </form>
    </div>
  );
}
