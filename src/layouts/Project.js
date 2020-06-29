import React, { Component } from "react";

export default class Project extends Component {
  render() {
    return (
      <div className="project">
        <div>
          <div>
            <img src={this.props.image} alt="prof" height="220" />
          </div>
          <div>
            <h1>{this.props.name}</h1>
            <h4>{this.props.des}</h4>
          </div>
          <div>
            <button className="button1 mr-2">
              <a href={this.props.link}>Demo</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
