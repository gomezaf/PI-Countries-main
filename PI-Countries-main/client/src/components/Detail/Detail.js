import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getCountriesById } from "../../actions";

import {
  StyledDetailPage,
  StyledDetailCard,
  StyledActivityContainer,
  StyledFlagContainer,
  StyledPropsContainer,
} from "./Detail.styles";

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
      <Link to="/home">
        <button className="goHome" />
      </Link>
      <StyledDetailCard>
        <StyledFlagContainer>
          <img src={imageOfTheFlag} />
        </StyledFlagContainer>
        <StyledPropsContainer>
          <h1>
            {name} / {id}
          </h1>
          <h3>Capital: {capital}</h3>
          <h3>Region: {region}</h3>
          <h3>Area: {area}</h3>
          <h3>Population: {population}</h3>
        </StyledPropsContainer>
        <StyledActivityContainer>
          <h2>Activities:</h2>
          {activities?.map((el) => (
            <p key={el.id}>{el.name}</p>
          ))}
        </StyledActivityContainer>
      </StyledDetailCard>
    </StyledDetailPage>
  );
}
