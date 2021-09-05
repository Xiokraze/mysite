import React from "react";
import OSPI from "./OSPI";
import styles from "./ProfessionalPage.module.css";

const ProfessionalPage = () => {
  return (
    <React.Fragment>
      <h2>Software Development</h2>
      <div className={styles.projects}>
      <OSPI />
      <OSPI />
      <OSPI />
      <OSPI />
      <OSPI />
      <OSPI />
    </div>
    </React.Fragment>
    
  );
};

export default ProfessionalPage;
