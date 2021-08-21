import React, { useState } from "react";
import styles from "./PersonalPage.module.css";
import Dogs from "./Dogs";

const PersonalPage = () => {
  const [showPoetry, setShowPoetry] = useState(false);
  const [showDogs, setShowDogs] = useState(false);

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
        <div className={styles.dataContainer}></div>
      </div>
      {showDogs && <Dogs />}
    </div>
  );
};

export default PersonalPage;
