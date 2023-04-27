import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCountries } from "../../actions";

import {
  StyledButton,
  StyledLandingBackground,
  StyledTitleContainer,
} from "./LandingPage.styles";

export default function LandingPage() {

  const dispatch = useDispatch()

    const [inShow, setInShow] = useState(false)

    useEffect (()=>{
        setInShow(true)
        dispatch(getCountries())
    },[setInShow, dispatch])
    
  return (
    <StyledLandingBackground inShow={inShow}>
      <StyledTitleContainer inShow={inShow}>Discover your next adventure</StyledTitleContainer>
      <Link to="/home">
        <StyledButton inShow={inShow}>home</StyledButton>
      </Link>
    </StyledLandingBackground>
  );
}
