import styled from "styled-components";

import places from "../../icons/places.png";
import home from "../../icons/home.png";

export const StyledCreateActPage = styled.div`
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

export const StyledFormContainer = styled.div`
  justify-content: center;
  position: fixed;
  top: 10%;
  left: 10%;
  bottom: 25%;
  right: 10%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;

  input {
    border-color: #cccccc;
    padding: 6px;
    font-size: 15px;
    text-align: left;
    border-radius: 10px;
    border-style: groove;
    border-width: 1px;
  }

  select {
    border-color: #cccccc;
    padding: 6px;
    font-size: 15px;
    text-align: left;
    border-radius: 10px;
    border-style: groove;
    border-width: 1px;
  }

  option {
    border-color: #cccccc;
    padding: 6px;
    font-size: 15px;
    text-align: left;
    border-radius: 10px;
    border-style: groove;
    border-width: 1px;
  }

  .buttonCreate {
    border-color: #cccccc;
    padding: 6px;
    font-size: 15px;
    text-align: center;
    border-radius: 10px;
    border-style: groove;
    border-width: 1px;
    width: 100px;
    height: 30px;
    cursor: pointer;
  }
`;
