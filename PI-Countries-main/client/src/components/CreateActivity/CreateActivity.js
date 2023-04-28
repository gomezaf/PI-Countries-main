import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { postActivity } from "../../actions/index";

export default function CreateActivity() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allCountries = useSelector((state) => state.allCountries);

  const seasons = ["Winter", "Spring", "Autumn", "Summer"];
  const difficulty = [1, 2, 3, 4, 5];
  const durationTime = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  const [input, setInput] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    country: [],
    city: "no se",
  });

  const [errors, setErrors] = useState({});

  function validate(input) {
    let errors = {};
    setErrors(errors);
    if (!input.name) {
      errors.name = "Insert the new activity name";
    } else if (!input.dificulty) {
      errors.dificulty = "Check the activity difficulty level";
    } else if (!input.duration) {
      errors.duration = "Select the duration of the activity";
    } else if (!input.season) {
      errors.season = "Select the season";
    } else if (!input.country) {
      errors.country = "Select the country";
    } else {
      setErrors(false);
    }
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    validate(input)
  }

  function handleSelectCountry(e) {
    setInput({
      ...input,
      country: [...input.country, e.target.value],
    });
    validate(input)
  }

  function handleSelect(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    validate(input)
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

  function handleDeleteCountry(el) {
    setInput({
      ...input,
      country: input.country.filter((c) => c !== el),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    validate(input);
    if (errors) {
      alert("Complete the form");
    } else {
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
  }

  return (
    <div>
      <Link to="/home">
        <button>volver</button>
      </Link>
      <h1>Crea tu activity</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Dificulty</label>
          <select name="dificulty" onChange={handleSelect}>
          <option >Select a difficulty</option>
            {difficulty.map((el) => <option value={el}>{el}</option>)}
          </select>
          {errors.dificulty && <p>{errors.dificulty}</p>}
        </div>
        <div>
          <label>Duration</label>
          <select name="duration" onChange={handleSelect}>
          <option >Select a duration</option>
            {durationTime.map((el) => <option value={el}>{el} hours</option>)}
          </select>
          {errors.duration && <p>{errors.duration}</p>}
        </div>
        <div>
          <label>Season</label>
          <select name="season" onChange={handleSelect}>
          <option >Select a season</option>
            {seasons.map((el) => <option value={el}>{el}</option>)}
          </select>
          {errors.season && <p>{errors.season}</p>}
        </div>
        <div>
          <label>Country</label>
          <select onChange={handleSelectCountry}>
          <option >Select a country</option>
            <input
              type="text"
              name="country"
              onChange={handleChangeInputCountry}
            />
            {renderCountries(allCountries, search)}
          </select>
          {errors.country && <p>{errors.country}</p>}
          {input.country.map((el) => (
            <div>
              <p>{el}</p>
              <button onClick={() => handleDeleteCountry(el)}>X</button>
            </div>
          ))}
        </div>
        <button type="submit">crear</button>
      </form>
    </div>
  );
}
