import React from "react";
import { Button } from "./../components/StartUpDownAnimBtn/StartUpDownAnimBtn";
import { ShootButton } from "./../components/StartShootAnimBtn/StartShootAnimBtn";
import UpDownBall from "./../components/UpDownBall/UpDownBall";
import LeftRightBall from "./../components/LeftRightBall/LeftRightBall";
import { StyledUpDownWrapper, StyledLeftRightWrapper } from "./styles";
import ShotAnimation from "./ShotAnimation/ShotAnimation";

function GolfGameWholeApp() {
  let countFirtstBtnClicks = 0;
  return (
    <React.Fragment>
      <StyledUpDownWrapper id="vert">
        <Button
          handleClick={(event) => {
            event.preventDefault();
            const animations = document.querySelectorAll("span");
            animations.forEach((animation) => {
              const running = animation.style.animationPlayState || "running";
              animation.style.animationPlayState =
                running === "paused" ? "running" : "paused";

              if (running === "running") {
                // THIS IS WHEN IT RUNS
                const rect = animation.getBoundingClientRect() as DOMRect;
                // log position top and do stuff depending where it is
                console.log(rect.left, rect.right, rect.top, rect.bottom);
                let IsThisTheWinningShot;
                if (rect.top > 110 && rect.top < 180) {
                  console.log("you hit the winning shot horizontally");
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

              // now we know if player is winning or losing on vertical,
              //let's count the button clicks to hide this module and show the next module

              countFirtstBtnClicks++;
              console.log(countFirtstBtnClicks);
              if (countFirtstBtnClicks === 0) {
              }
              if (countFirtstBtnClicks === 1) {
              }
              if (countFirtstBtnClicks === 2) {
              }
              if (countFirtstBtnClicks === 3) {
                let verticalBox = document.getElementById(
                  "vert"
                ) as HTMLDivElement;
                verticalBox.style.display = "none";
                let horizBox = document.getElementById(
                  "horiz"
                ) as HTMLDivElement;
                horizBox.style.display = "block";
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
      <StyledLeftRightWrapper id="horiz">
        0% - 20% - 40% - 60% - 80% - 100%
        <ShootButton
          handleClick={(event) => {
            event.preventDefault();
            const animations = document.querySelectorAll("i");
            animations.forEach((animation) => {
              const running = animation.style.animationPlayState || "running";
              animation.style.animationPlayState =
                running === "paused" ? "running" : "paused";

              if (running === "running") {
                // THIS IS WHEN IT RUNS
                const rect = animation.getBoundingClientRect() as DOMRect;
                // log position top and do stuff depending where it is
                console.log(rect.left, rect.right, rect.top, rect.bottom);
                let IsThisTheWinningShot;
                if (rect.left > 120 && rect.left < 180) {
                  console.log("you hit the second winning shot vertically");
                  IsThisTheWinningShot = true;
                } else if (rect.left < 110) {
                  console.log("you too left");
                  IsThisTheWinningShot = false;
                } else if (rect.left > 180) {
                  console.log("you too right");
                  IsThisTheWinningShot = false;
                }
                console.log(IsThisTheWinningShot);
              }
              if (running === "paused") {
              }

              // now we know if player is winning or losing on horizontal,
              //let's count the button clicks to hide this module and show the last module

              countFirtstBtnClicks++;
              console.log(countFirtstBtnClicks);
              if (countFirtstBtnClicks === 0) {
              }
              if (countFirtstBtnClicks === 1) {
              }
              if (countFirtstBtnClicks === 2) {
              }
              if (countFirtstBtnClicks === 3) {
                //alert("Youre done");
                //hide second box here
              }
              if (countFirtstBtnClicks === 4) {
                let horizBox = document.getElementById(
                  "horiz"
                ) as HTMLDivElement;
                horizBox.style.display = "none";

                let nextShotAnim = document.getElementById(
                  "generatedShot"
                ) as HTMLDivElement;
                nextShotAnim.style.display = "block";
              }
            });
          }}
        />
        <LeftRightBall />
      </StyledLeftRightWrapper>
      <ShotAnimation />
    </React.Fragment>
  );
}

export default GolfGameWholeApp;
