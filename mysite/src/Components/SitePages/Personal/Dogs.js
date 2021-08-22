import XiaHeader from "../../../Assets/Dogs/x1.jpg";
import x2 from "../../../Assets/Dogs/x2.jpg";
import x3 from "../../../Assets/Dogs/x3.jpg";
import x4 from "../../../Assets/Dogs/x4.jpg";
import x5 from "../../../Assets/Dogs/x5.jpg";
import x6 from "../../../Assets/Dogs/x6.jpg";
import x7 from "../../../Assets/Dogs/x7.jpg";
import x8 from "../../../Assets/Dogs/x8.jpg";
import NixieHeader from "../../../Assets/Dogs/n1.jpg";
import n2 from "../../../Assets/Dogs/n2.jpg";
import n3 from "../../../Assets/Dogs/n3.jpg";
import n4 from "../../../Assets/Dogs/n4.jpg";
import styles from "./Dogs.module.css";
import React, { useState } from "react";
import ImageGallery from "../../UIElements/ImageGallery";

const Dogs = () => {
  const xiaImages = [XiaHeader, x2, x3, x4, x5, x6, x7, x8];
  const nixieImages = [NixieHeader, n2, n3, n4];

  return (
    <div className={styles.rootDogsDiv}>
      <div className={styles.headerImgContainer}>
        <ImageGallery title="Xia" images={xiaImages} />
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
        <ImageGallery title="Nixie" images={nixieImages} />
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
