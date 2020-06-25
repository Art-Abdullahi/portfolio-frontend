import React, { useState, useEffect } from "react";
import Humburger from "./Humburger";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link, withRouter } from "react-router-dom";

const Menu = ({ history }) => {
  const [state, setstate] = useState({
    intial: false,
    clicked: null,
    menuName: "Menu",
  });

  const [disabled, setdisabled] = useState(false);
  const handleMenu = () => {
    disableMenu();
    if (state.intial === false) {
      setstate({
        intial: null,
        clicked: true,
        menuName: "close",
      });
    } else if (state.clicked === true) {
      setstate({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setstate({
        clicked: !state.clicked,
        menuName: "close",
      });
    }
  };

  //will determine if menu is disabled
  const disableMenu = () => {
    setdisabled(!disabled);
    setTimeout(() => {
      setdisabled(false);
    }, 1200);
  };

  useEffect(() => {
    history.listen(() => {
      setstate({
        clicked: false,
        menuName: "Menu",
      });
    });
  });
  return (
    <header>
      <div className="contain">
        <div className="wrapper">
          <div className="inner-header">
            <div className={state.clicked ? "logo-active" : "logo"}>
              <Link to="/">
                <h2>
                  {" "}
                  <a href="/">ABDULLAHI</a>
                </h2>
              </Link>
            </div>
            <div className="menu">
              <span>
                {state.clicked ? (
                  <GrClose
                    disabled={disabled}
                    onClick={handleMenu}
                    style={{
                      color: "black",
                      fontSize: "3rem",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <GiHamburgerMenu
                    disabled={disabled}
                    onClick={handleMenu}
                    style={{
                      color: "#61dafb",
                      fontSize: "3rem",
                      cursor: "pointer",
                    }}
                  />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Humburger state={state} />
    </header>
  );
};

export default withRouter(Menu);
