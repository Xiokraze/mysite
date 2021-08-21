import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Animated.scss";

const HeaderNavBar = ({
  loadingSlideLeftAnimation,
  loadingAnimationRunning,
}) => {
  const [homeFocused, setHomeFocused] = useState(true);
  const [professionalFocused, setProfessionalFocused] = useState(false);
  const [personalFocused, setPersonalFocused] = useState(false);

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
    // eslint-disable-next-line
  }, []);

  const homeClicked = () => {
    setHomeFocused(true);
    setProfessionalFocused(false);
    setPersonalFocused(false);
    sessionStorage.setItem("menuSelection", "home");
    if (!loadingAnimationRunning) {
      loadingSlideLeftAnimation();
    }
  };

  const professionalClicked = () => {
    setHomeFocused(false);
    setProfessionalFocused(true);
    setPersonalFocused(false);
    sessionStorage.setItem("menuSelection", "professional");
    if (!loadingAnimationRunning) {
      loadingSlideLeftAnimation();
    }
  };

  const personalClicked = () => {
    setHomeFocused(false);
    setProfessionalFocused(false);
    setPersonalFocused(true);
    sessionStorage.setItem("menuSelection", "personal");
    if (!loadingAnimationRunning) {
      loadingSlideLeftAnimation();
    }
  };

  const homeClass = homeFocused ? "navMenuSelected" : "navMenu";
  const professionalClass = professionalFocused ? "navMenuSelected" : "navMenu";
  const personalClass = personalFocused ? "navMenuSelected" : "navMenu";

  return (
    <React.Fragment>
      <div className="headerDiv">
        <browserTypewriter>Joshua Worthington</browserTypewriter>
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
        <mobileTypewriter>Joshua Worthington</mobileTypewriter>
      </div>
    </React.Fragment>
  );
};

export default HeaderNavBar;
