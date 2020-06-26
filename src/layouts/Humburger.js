import React, { useEffect, useRef } from "react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import {
  AiFillMediumCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const Humburger = ({ state }) => {
  let menu = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      //close
      menu.style.display = "none";
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //open
      menu.style.display = "block";
    }
  });

  return (
    <div
      ref={(el) => (menu = el)}
      className="animate__animated animate__fadeInDown humburger-menu"
    >
      <div className="menu-secondary-background-color"></div>
      <div className="menu-layer "></div>
      <div className="contain">
        <div className="wrapper">
          <div className="menu-links">
            <nav>
              <ul>
                <Link to="/projects">
                  <li>Projects</li>
                </Link>
                <Link to="about">
                  <li>About Me</li>
                </Link>
                <Link to="/contact">
                  <li>Contact Me</li>
                </Link>
              </ul>
            </nav>
            <div className="info">
              <h3>My Promise</h3>
              <p>
                I promise to work hands on your project and satisfy you cause
                thats my joy.
              </p>
            </div>
            <div className="icons">
              <span>
                <FaFacebookSquare />
              </span>
              <span>
                <FaTwitterSquare />
              </span>
              <span>
                <AiFillLinkedin />
              </span>
              <span>
                <AiFillMediumCircle />
              </span>
              <span>
                <AiFillInstagram />
              </span>
            </div>
            <div className="socials">
              Socials:
              <span>Facebook</span>
              <span>Twitter</span>
              <span>Youtube</span>
              <span>Pintrest</span>
              <span>Medium</span>
              <span>Linkedin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Humburger;
