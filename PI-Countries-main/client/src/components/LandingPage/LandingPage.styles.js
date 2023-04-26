import styled, { css } from "styled-components";

import backLandingPage from "../../icons/backLandingPage.gif";

export const StyledLandingBackground = styled.div`
  position: relative;
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${backLandingPage});
  height: 100vh;
  width: auto;
  transition: 100s ease-in-out;
  /* ::before {
    display: flex;
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    box-shadow: -700px 2px 99px 3px rgba(0,0,0,0.93) inset;
    transition: 1s ease-in-out;
  } */
  ${(props) =>
    props.inShow &&
    css`
  ::before {
    display: flex;
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    box-shadow: -700px 2px 99px 3px rgba(0,0,0,0.93) inset;
    transition: 10s ease-in-out;
  } */
 `}
`;
export const StyledTitleContainer = styled.div``;

export const StyledButton = styled.div``;
