import styled from "styled-components";

import { ReactComponent as Search } from "../../icons/search.svg";

export const StyledSearchIcon = styled(Search)`
  width: 16px;
  height: 16px;
  box-shadow: 5px blue;
`;

export const StyledSearchBarContainer = styled.div`
  display: flex;
  height: 55px;
  width: auto;
  align-items: center;
`;

export const StyledSearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 5px;
  background-color: white;
  border: 5px groove;
  border-left: none;
  border-color: "#1F1FEF";
  width: 50px;
  height: 40px;
  cursor: pointer;
`;

export const StyledContainer = styled.div`
  display: flex;
  height: 55px;
  width: auto;
  padding-right: 60px;
  justify-content: end;
  align-items: center;
  gap: 1rem;
`;

export const StyledInput = styled.input`
  display: flex;
  border-radius: 5px 0px 0px 5px;
  border: none;
  width: 240px;
  padding: 0 0 0 15px;
  height: 30px;
  border: 5px groove;
  border-right: none;
  border-color: "#1F1FEF";
  &:focus {
    outline: none;
  }
`;