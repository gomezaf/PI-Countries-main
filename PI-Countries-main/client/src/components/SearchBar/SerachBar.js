import { React, useState } from "react";
import { useDispatch } from "react-redux";

import { getcountryByName } from "../../actions";

import Input from "./Input";

import {
  StyledContainer,
  StyledSearchButton,
  StyledSearchBarContainer,
  StyledSearchIcon,
} from "./SearchBar.styles";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  function handleInputChange(e) {
    setName(e);
  }

  function handlerSubmit(e) {
    e.preventDefault();
    dispatch(getcountryByName(name));
    setName("")
  }

  return (
    <StyledContainer>
      <StyledSearchBarContainer>
        <Input value={name} onChange={handleInputChange} />
        <StyledSearchButton onClick={(e) => handlerSubmit(e)} type="submit">
          <StyledSearchIcon />
        </StyledSearchButton>
      </StyledSearchBarContainer>
    </StyledContainer>
  );
};

export default SearchBar;
