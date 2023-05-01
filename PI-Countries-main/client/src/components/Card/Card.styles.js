import styled from "styled-components";

import places from "../../icons/places.png";

export const StyledCard = styled.div`
  margin: 40px;
  height: 340px;
  width: 260px;
  box-shadow: 3px -4px 28px 15px rgba(0, 0, 0, 0.46) inset;
  border-radius: 10px;
  border: 1px inset rgba(59, 56, 56, 0.06);
  cursor: pointer;
  background-image: url(${places});
  background-size: cover;
  background-repeat: no-repeat;
  text-decoration: none;

  img {
    margin-top: 15px;
    height: 156px;
    width: 203px;
    border-radius: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
    margin: 10px;
    border-radius: 5px;
    border: 1px inset rgba(59, 56, 56, 0.06);
    background: #ffffff;
    background: linear-gradient(
      0deg,
      #ffffff 0%,
      rgba(231, 210, 186, 0.43) 80%
    );
    background: -webkit-linear-gradient(
      0deg,
      #ffffff 0%,
      rgba(231, 210, 186, 0.43) 80%
    );
    background: -moz-linear-gradient(
      0deg,
      #ffffff 0%,
      rgba(231, 210, 186, 0.43) 80%
    );
    max-height: 110px;
    max-width: 250px;
    align-content: center;
    width: auto;
    height: auto;
  }

  h3 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    width: auto;
    height: auto;
    margin-bottom: 30px;
    margin-top: 5px;
  }

  h4 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 17px;
    font-weight: bold;
    text-decoration: none;
    width: auto;
    height: auto;
  }
`;
