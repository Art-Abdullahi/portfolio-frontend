import React from "react";
import Particles from "react-particles-js";

const Background = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 8,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 1,
            out_mode: "out",
          },
          shape: {
            type: ["image"],
            image: [
              {
                src: require("../images/js.png"),
                height: 50,
                width: 50,
              },
              {
                src: require("../images/html.png"),
                height: 50,
                width: 50,
              },
              {
                src: require("../images/react.png"),
                height: 50,
                width: 50,
              },
            ],
          },
          color: {
            value: "#61dafb",
          },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
};

export default Background;
