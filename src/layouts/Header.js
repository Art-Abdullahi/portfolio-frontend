import React, { Component } from "react";
import hero from "../images/hero2.svg";

export default class Header extends Component {
  scrollDown() {
    window.scroll(900, 900);
  }
  render() {
    return (
      <>
        <div className="App-header container mt-0 align-items-justify text-center">
          <img src={hero} alt="hero" height="220" style={{}} />
          <h1>Hi i am Abdullahi and i develop,design and deploy web Apps.</h1>

          <div className="container">
            <button className="button1 mr-2" onClick={this.scrollDown}>
              Projects
            </button>
            <button className="button1 ml-2">Contact Me</button>
          </div>
        </div>
      </>
    );
  }
}
