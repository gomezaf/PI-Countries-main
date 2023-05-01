import styled from "styled-components";

export const StyledNavbarContainer = styled.div`
z-index: 2;
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding-top: 5px;
  padding-bottom: 5px;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
`;

export const StyledButtonsRigth = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 30px;
  gap: 10px;

  .button {
    height: 60px;
    background-color: #f5f5f5;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
  }
`;
