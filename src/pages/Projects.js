import React, { Component } from "react";
import Project from "../layouts/Project";
import { Consumer } from "../components/context/DataProvider";

class Projects extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { projects } = value;

          return (
            <div>
              <div className="projects">
                <h1>Featured Projects</h1>
                {projects.map((project) => (
                  <div key={project.id} className="container">
                    <Project
                      name={project.repo_name}
                      image={project.project_slides[0].img}
                      des={project.description}
                      link={project.repo_link}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Projects;
