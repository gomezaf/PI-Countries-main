import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCountries } from "../../actions";

import SearchBar from "../SearchBar/index";
import Dropbox from "../Dropbox/index";

import { StyledNavbarContainer, StyledButtonsRigth } from "./Navbar.styles";

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <StyledNavbarContainer>
      <StyledButtonsRigth>
        <button className="button" onClick={() => dispatch(getCountries())}>Reload</button>
        <Link to={"/createActivity"}>
          <button className="button">create avtivity</button>
        </Link>
        <Dropbox />
      </StyledButtonsRigth>
      <SearchBar />
    </StyledNavbarContainer>
  );
}
