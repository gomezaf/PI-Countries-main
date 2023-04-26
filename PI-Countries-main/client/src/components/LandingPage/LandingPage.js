import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  StyledButton,
  StyledLandingBackground,
  StyledTitleContainer,
} from "./LandingPage.styles";

export default function LandingPage() {

    const [inShow, setInShow] = useState(false)

    useEffect (()=>{
        setInShow(true)
    })
    
  return (
    <StyledLandingBackground inShow={inShow}>
      <StyledTitleContainer inShow={inShow}>hola</StyledTitleContainer>
      <Link to="/home">
        <StyledButton inShow={inShow}>home</StyledButton>
      </Link>
    </StyledLandingBackground>
  );
}
