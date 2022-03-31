import React from "react";
import { Button } from "./../components/StartUpDownAnimBtn/StartUpDownAnimBtn";
import UpDownBall from "./../components/UpDownBall/UpDownBall";
import { StyledUpDownWrapper } from "./styles";
// onclick start animation

// on click stop animation

// log ball coordinates

// assign values based on coords.

function GolfGameWholeApp() {
  return (
    <StyledUpDownWrapper>
      <Button
        handleClick={(event) => {
          event.preventDefault();
          // console.log("button clicked", event);
          const animations = document.querySelectorAll("span");
          animations.forEach((animation) => {
            const running = animation.style.animationPlayState || "running";
            animation.style.animationPlayState =
              running === "running" ? "paused" : "running";
            if (running === "running") {
              // THIS IS WHEN IT PAUSES
              const rect = animation.getBoundingClientRect() as DOMRect;
              // log position top and do stuff depending where it is
              console.log(rect.left, rect.right, rect.top, rect.bottom);
              let IsThisTheWinningShot;
              if (rect.top > 110 && rect.top < 180) {
                console.log("you hit the winning shot!");
                IsThisTheWinningShot = false;
                // here we hide this module and play out anim YOU WON
              } else if (rect.top < 110) {
                console.log("you too high");
                IsThisTheWinningShot = true;
                // here we hide this module and play out anim YOU TOO HIGH inc randomized
              } else if (rect.top > 180) {
                console.log("you too low");
                IsThisTheWinningShot = false;
                // here we hide this module and play out anim YOU TOO LOW inc randomized
              }
              console.log(IsThisTheWinningShot);
            }
            if (running === "paused") {
            }
          });
        }}
      />
      <UpDownBall />
      <br />
      0%
      <br />
      10%
      <br />
      20%
      <br />
      30%
      <br />
      40%
      <br />
      50%
      <br />
      60%
      <br />
      70%
      <br />
      80%
      <br />
      90%
      <br />
      100%
    </StyledUpDownWrapper>
  );
}

export default GolfGameWholeApp;
