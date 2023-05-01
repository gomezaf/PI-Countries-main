import styled from "styled-components";

export const StyledPaginatedContainer = styled.div`
  z-index: 2;
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  height: 60px;
  background-color: white;
  width: 100%;
  top: 92%;
`;

export const StyledNumberPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  cursor: pointer;
  color: #666666;
  font-family: Arial;
  font-size: 15px;
  text-decoration: none;
  height: 25px;
  width: 25px;
`;
