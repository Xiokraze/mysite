import React, { useState } from "react";
import styles from "./PersonalPage.module.css";
import Dogs from "./Dogs";
import Poetry from "./Poetry";
import SideNavBar from "../../UIElements/SideNavBar/SideNavBar";
import SideNavBarOption from "../../UIElements/SideNavBar/SideNavBarOption";

const PersonalPage = () => {
  const [showPoetry, setShowPoetry] = useState(false);
  const [showDogs, setShowDogs] = useState(true);

  const hideComponents = () => {
    setShowDogs(false);
    setShowPoetry(false);
  };

  const showComponent = (component) => {
    hideComponents();
    switch (component) {
      case "dogs":
        setShowDogs(true);
        break;
      case "poetry":
        setShowPoetry(true);
        break;
      default:
        break;
    }
  };

  const dogsClicked = () => {
    showComponent("dogs");
  };

  const poetryClicked = () => {
    showComponent("poetry");
  };

  return (
    <div className={styles.personalDiv}>
      <SideNavBar>
        <SideNavBarOption
          onclick={dogsClicked}
          isFocused={showDogs}
          title="Dogs"
        />
        <SideNavBarOption
          onclick={poetryClicked}
          isFocused={showPoetry}
          title="Poetry"
        />
      </SideNavBar>
      {showDogs && <Dogs />}
      {showPoetry && <Poetry />}
    </div>
  );
};

export default PersonalPage;
