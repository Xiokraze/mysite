import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Animated.scss";

const HeaderNavBar = () => {
  useEffect(() => {
    var menuSelection = sessionStorage.getItem("menuSelection");
    if (menuSelection) {
      switch (menuSelection) {
        case "home":
          homeClicked();
          break;
        case "professional":
          professionalClicked();
          break;
        case "personal":
          personalClicked();
          break;
        default:
          break;
      }
    }
  }, []);

  const [homeFocused, setHomeFocused] = useState(true);
  const [professionalFocused, setProfessionalFocused] = useState(false);
  const [personalFocused, setPersonalFocused] = useState(false);

  const homeClicked = (event) => {
    setHomeFocused(true);
    setProfessionalFocused(false);
    setPersonalFocused(false);
    sessionStorage.setItem("menuSelection", "home");
  };

  const professionalClicked = (event) => {
    setHomeFocused(false);
    setProfessionalFocused(true);
    setPersonalFocused(false);
    sessionStorage.setItem("menuSelection", "professional");
  };

  const personalClicked = (event) => {
    setHomeFocused(false);
    setProfessionalFocused(false);
    setPersonalFocused(true);
    sessionStorage.setItem("menuSelection", "personal");
  };

  const homeClass = homeFocused ? "navMenuSelected" : "navMenu";
  const professionalClass = professionalFocused ? "navMenuSelected" : "navMenu";
  const personalClass = personalFocused ? "navMenuSelected" : "navMenu";

  return (
    <div className="headerDiv">
      <typewriter>Joshua Worthington</typewriter>
      <ul className="navMenu">
          <li className={homeClass} onClick={homeClicked}>
            <Link to="/">Home</Link>
          </li>
          <li className={professionalClass}>
            <Link to="/professional" onClick={professionalClicked}>
              Professional
            </Link>
          </li>
          <li className={personalClass}>
            <Link to="/personal" onClick={personalClicked}>
              Personal
            </Link>
          </li>
        </ul>
    </div>
  );
};

export default HeaderNavBar;
