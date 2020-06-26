import React, { Component } from "react";
import hero from "../images/hero2.svg";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="App-header container mt-0 align-items-justify text-center">
          <img src={hero} alt="hero" style={{}} />
          <h1 className="animate__animated animate__bounceIn">
            Hi i am Abdullahi and i develop,design and deploy web Apps.
          </h1>

          <div className="container d-flex">
            <button className="button1 mr-2">Projects</button>
            <button className="button1 ml-2">Contact Me</button>
          </div>
        </div>
      </>
    );
  }
}
