import XiaHeader from "../../../Assets/Dogs/x1.jpg";
import NixieHeader from "../../../Assets/Dogs/n1.jpg";
import styles from "./Dogs.module.css";
import React, { useState } from "react";

const Dogs = () => {
  return (
    <div className={styles.rootDogsDiv}>
      <div className={styles.headerImgContainer}>
        <h2>Xia</h2>
        <img src={XiaHeader} alt="" className={styles.headerImage} />
        <h2>Breed</h2>
        <p>Miniature Australian Shephard</p>
        <h2>Aliases</h2>
        <p>Peanut</p>
        <p>Pickle</p>
        <p>Punkin</p>
        <p>Xia-Zi</p>
        <p>Xerxes</p>
        <h2>Birthday</h2>
        <p>May 2016</p>
        <h2>Favorite Toy</h2>
        <p>Lamb Chop or Monster</p>
      </div>
      <div className={styles.headerImgContainer}>
        <h2>Nixie</h2>
        <img src={NixieHeader} alt="" className={styles.headerImage} />
        <h2>Breed</h2>
        <p>Toy Australian Shephard</p>
        <h2>Aliases</h2>
        <p>Noodle</p>
        <p>Nurnur</p>
        <p>Nixie Ni</p>
        <p>Miss Ni</p>
        <p>Nixie the Nightmare Dog</p>
        <h2>Birthday</h2>
        <p>October 2018</p>
        <h2>Favorite Toy</h2>
        <p>Squeaky Ball</p>
      </div>
    </div>
  );
};

export default Dogs;
