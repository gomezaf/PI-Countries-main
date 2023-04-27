import styled, { css } from "styled-components";

import backLandingPage from "../../icons/backLandingPage.gif";

export const StyledLandingBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${backLandingPage});
  height: 100vh;
  width: auto;
  ::before {
    display: flex;
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    box-shadow: -700px 2px 99px 3px rgba(0, 0, 0, 0.93) inset;
    opacity: 0;
  }
  ${(props) =>
    props.inShow &&
    css`
      ::before {
        transition: 3s ease-in-out;
        opacity: 1;
      }
    `}
`;
export const StyledTitleContainer = styled.h1`
  position: absolute;
  top: 5%;
  left: 70%;
  height: 500px;
  width: 315px;
  font-size: 85px;
  font-family: fantasy;
  opacity: 0;
  text-shadow: 3px 1px 11px rgba(59, 236, 101, 0.76);
  ${(props) =>
    props.inShow &&
    css`
      transition: 3s ease-in-out;
      opacity: 1;
    `}
`;

export const StyledButton = styled.button`
  background: #000000;
  background-image: linear-gradient(to bottom, #000000, #878f94);
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  position: absolute;
  bottom: 10%;
  left: 74%;
  height: 70px;
  width: 220px;
  font-size: 65px;
  font-family: fantasy;
  cursor: pointer;
  text-shadow: 2px 4px 4px rgb(211 241 234 / 60%);
  border-radius: 10px;
  box-shadow: 1px 1px 15px #5b665c;
  opacity: 0;

  ${(props) =>
    props.inShow &&
    css`
      transition: 3s ease-in-out;
      opacity: 1;
    `}
`;
