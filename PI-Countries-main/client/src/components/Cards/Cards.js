import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "../Card/index";
import Paginated from "../Paginated/index";

import { StyledCardsContainer, StyledCardBox, StyledNotFound } from "./Cards.styles";

export default function Cards() {

  const countryState = useSelector((state) => state.countries);
  const statusFilter = useSelector((state) => state.statusFilter);

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const currentCountries = countryState.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const renderCard = currentCountries.map((el) => {
    return (
      <div key={el.name}>
        <Link to={"/home/" + el.id}>
          <Card image={el.imageOfTheFlag} name={el.name} region={el.region} />
        </Link>
      </div>
    );
  });

  const renderNotFound = <StyledNotFound>Country not found</StyledNotFound>;

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {}, [currentCountries, statusFilter]);

  return (
    <StyledCardsContainer>
      <StyledCardBox>
        {currentCountries.length === 0 ? renderNotFound : renderCard}
      </StyledCardBox>
      <Paginated
        countriesPerPage={countriesPerPage}
        paginado={paginado}
        allCountries={countryState.length}
      />
    </StyledCardsContainer>
  );
}
