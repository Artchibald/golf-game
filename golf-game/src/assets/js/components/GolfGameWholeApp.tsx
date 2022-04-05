import React from "react";
import { Button } from "./../components/StartUpDownAnimBtn/StartUpDownAnimBtn";
import UpDownBall from "./../components/UpDownBall/UpDownBall";
import { StyledUpDownWrapper } from "./styles";
// onclick start animation

// on click stop animation

// log ball coordinates

// assign values based on coords.

function GolfGameWholeApp() {
  let countFirtstBtnClicks = 0;

  return (
    <StyledUpDownWrapper>
      <Button
        handleClick={(event) => {
          event.preventDefault();
          countFirtstBtnClicks++;
          console.log(countFirtstBtnClicks);
          if (countFirtstBtnClicks === 0) {
          }
          if (countFirtstBtnClicks === 1) {
          }
          if (countFirtstBtnClicks === 2) {
          }
          if (countFirtstBtnClicks === 3) {
            alert("Youre done");
          }
          // console.log("button clicked", event);
          const animations = document.querySelectorAll("span");
          animations.forEach((animation) => {
            const running = animation.style.animationPlayState || "running";
            animation.style.animationPlayState =
              running === "paused" ? "running" : "paused";

            if (running === "running") {
              // alert("Paused");
              // THIS IS WHEN IT RUNS
              const rect = animation.getBoundingClientRect() as DOMRect;
              // log position top and do stuff depending where it is
              console.log(rect.left, rect.right, rect.top, rect.bottom);
              let IsThisTheWinningShot;
              if (rect.top > 110 && rect.top < 180) {
                console.log("you hit the winning ");
                IsThisTheWinningShot = true;
              } else if (rect.top < 110) {
                console.log("you too high");
                IsThisTheWinningShot = false;
              } else if (rect.top > 180) {
                console.log("you too low");
                IsThisTheWinningShot = false;
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
