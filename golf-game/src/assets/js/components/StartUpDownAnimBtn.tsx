import React, { Component, MouseEvent } from "react";

export class StartUpDownAnimBtn extends Component {
  handleClick(event: MouseEvent) {
    event.preventDefault();
    //alert(event.currentTarget.tagName); // alerts BUTTON
    console.log("start btn clicked");
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.children}START BTN</button>
    );
  }
}
