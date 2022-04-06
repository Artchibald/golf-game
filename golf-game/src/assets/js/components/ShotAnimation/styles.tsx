import styled from "styled-components";

export const StyledShotAnimation = styled.div`
  background-color: green;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: none;
`;

export const GolfBall = styled.div`
  background-color: white;
  position: absolute;
  top: 45%;
  left: 5%;
  right: auto;
  bottom: 45%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
`;

export const GolfHole = styled.div`
  background-color: black;
  position: absolute;
  top: 45%;
  left: auto;
  right: 5%;
  bottom: 45%;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: block;
`;
