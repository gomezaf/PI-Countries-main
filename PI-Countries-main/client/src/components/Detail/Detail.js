import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getCountriesById } from "../../actions";

import { StyledDetailPage, StyledDetailCard } from "./Detail.styles";

export default function Detail() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.detail);
  const params = useParams();

  useEffect(() => {
    dispatch(getCountriesById(params.id));
  }, [dispatch]);

  const {
    imageOfTheFlag,
    name,
    id,
    capital,
    region,
    area,
    population,
    activities,
  } = countries[0] || {};

  return (
    <StyledDetailPage>
      <StyledDetailCard>
        <div className="imgDiv">
          <img src={imageOfTheFlag} />
        </div>
        <div className="propsDiv">
          <h1>
            {name}/{id}
          </h1>
          <h3>Capital:{capital}</h3>
          <h2>Region: {region}</h2>
          <h3>Area: {area}</h3>
          <h3>Population: {population}</h3>
          <li>
            Activities:
            {activities?.map((el) => (
              <ul key={el.id}>{el.name}</ul>
            ))}
          </li>
        </div>
      </StyledDetailCard>
    </StyledDetailPage>
  );
}
