import React from "react";

import { StyledCard } from "./Card.styles";

export default function Card({ image, name, region }) {
  return (
    <StyledCard>
      <img src={image} alt="flag not found" />
      <div>
        <h3>{name}</h3>
        <h4>{region}</h4>
      </div>
    </StyledCard>
  );
}
