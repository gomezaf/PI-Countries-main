import React from "react";

import { StyledPaginatedContainer, StyledNumberPage } from "./Paginated.styles";

export default function Paginated({ allCountries, countriesPerPage, paginado }) {
  const pageNumber = [];

  for (let i = 0; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumber.push(i + 1);
  }
  

  return (
    <StyledPaginatedContainer>
        {pageNumber &&
          pageNumber.map((p) => {
            return <StyledNumberPage key={p} onClick={() => paginado(p)}>{p}</StyledNumberPage>;
          })}
    </StyledPaginatedContainer>
  );
}
