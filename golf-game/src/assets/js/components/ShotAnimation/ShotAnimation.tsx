import React from "react";
import { StyledShotAnimation, GolfBall, GolfHole } from "./styles";

const ShotAnimation = (props: any) => {
  return (
    <StyledShotAnimation id="generatedShot">
      <GolfHole />
      <GolfBall id="golfBall" />
    </StyledShotAnimation>
  );
};

export default ShotAnimation;
