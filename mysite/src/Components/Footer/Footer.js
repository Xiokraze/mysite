import styles from "./Footer.module.css";
import { ReactComponent as LinkedInLogo } from "../../Assets/linkedin.svg";
import { ReactComponent as GitHubLogo } from "../../Assets/github.svg";
import { ReactComponent as FacebookLogo } from "../../Assets/facebook.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.socialDiv}>
      <Link
        className={styles.linkDiv}
        to={{ pathname: "https://www.linkedin.com/in/xiokraze/" }}
        target="_blank"
      >
        <LinkedInLogo className={styles.linkedin} />
      </Link>
      <Link
        className={styles.linkDiv}
        to={{ pathname: "https://github.com/Xiokraze" }}
        target="_blank"
      >
        <GitHubLogo className={styles.github} />
      </Link>
      <Link
        className={styles.linkDiv}
        to={{ pathname: "https://www.facebook.com/joshua.worthington.79" }}
        target="_blank"
      >
        <FacebookLogo className={styles.facebook} />
      </Link>
    </div>
  );
};

export default Footer;
