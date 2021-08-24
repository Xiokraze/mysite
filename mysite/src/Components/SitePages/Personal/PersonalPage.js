import React, { useState } from "react";
import styles from "./PersonalPage.module.css";
import Dogs from "./Dogs";
import Poetry from "./Poetry";

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

  const poetryClass = showPoetry ? styles.liOptionFocused : styles.liOption;
  const dogsClass = showDogs ? styles.liOptionFocused : styles.liOption;

  return (
    <div className={styles.personalDiv}>
      <div className={styles.itemDiv}>
        <ul className={styles.ulList}>
          <li onClick={dogsClicked} className={dogsClass}>
            Dogs
          </li>
          <li onClick={poetryClicked} className={poetryClass}>
            Poetry
          </li>
        </ul>
      </div>
      {showDogs && <Dogs />}
      {showPoetry && <Poetry />}
    </div>
  );
};

export default PersonalPage;
