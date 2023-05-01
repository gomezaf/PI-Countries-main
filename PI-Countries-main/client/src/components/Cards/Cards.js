import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "../Card/index";
import Paginated from "../Paginated/index";

import { StyledCardsContainer, StyledCardBox } from "./Cards.styles";

export default function Cards() {
  const dispatch = useDispatch()
  const allCountries = useSelector((state) => state.countries);
 
  useEffect(()=>{
  }, [allCountries.length])

  const [order, setOrder] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <StyledCardsContainer>
      <StyledCardBox>
      {currentCountries?.map((el) => {
        return (
          <div key={el.name}>
            <Link to={"/home/" + el.id}>
              <Card
                image={el.imageOfTheFlag}
                name={el.name}
                region={el.region}
              />
            </Link>
          </div>
        );
      })}
      </StyledCardBox>
      <Paginated
        countriesPerPage={countriesPerPage}
        paginado={paginado}
        allCountries={allCountries.length}
      />
    </StyledCardsContainer>
  );
}
