import styled from "styled-components";

import places from "../../icons/places.png";
import home from "../../icons/home.png";

export const StyledDetailPage = styled.div`
  display: flex;
  height: 100vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(${places});

  .goHome {
    position: fixed;
    top: 5%;
    left: 5%;
    background-image: url(${home});
    background-size: contain;
    height: 50px;
    width: 50px;
    cursor: pointer;
  }
`;

export const StyledDetailCard = styled.div`
  position: fixed;
  top: 0%;
  left: 10%;
  bottom:25%;
  right:10%;
  display: flex;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledFlagContainer = styled.div`
  border-radius: 10px;
  height: 200px;
    width: 350px;
  box-shadow: 0px 0px 65px 5px rgba(0, 0, 0, 0.73);
  img {
    height: 200px;
    width: 350px;
    border-radius: 10px;
  } 
`;

export const StyledPropsContainer = styled.div`
 
`;

export const StyledActivityContainer = styled.div`
`;
