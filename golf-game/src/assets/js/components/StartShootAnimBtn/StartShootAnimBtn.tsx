import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export const ShootButton = (props: ButtonProps) => {
  return <button onClick={props.handleClick}>Start Shot</button>;
};
