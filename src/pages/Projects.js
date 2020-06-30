import React, { Component } from "react";
import Project from "../layouts/Project";
import { Consumer } from "../components/context/DataProvider";

class Projects extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { projects, startSlider } = value;

          return (
            <div>
              <h1 className="text-center">featured Projects</h1>
              <div className="swiper-container" onLoad={() => startSlider()}>
                <div className="swiper-wrapper ">
                  {projects.map((project) => (
                    <div key={project.id} className="swiper-slide ">
                      <Project
                        startSlider={() => startSlider()}
                        name={project.repo_name}
                        image={project.project_slides[0].img}
                        des={project.description}
                        link={project.repo_link}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ color: "red" }}>
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Projects;
