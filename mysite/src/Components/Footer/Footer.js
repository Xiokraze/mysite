import styles from "./Footer.module.css";
import { ReactComponent as LinkedInLogo } from "../../Assets/linkedin.svg";
import { ReactComponent as GitHubLogo } from "../../Assets/github.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.socialDiv}>
      <Link className={styles.linkDiv} to={{pathname: "https://www.linkedin.com/in/xiokraze/"}} target="_blank">
        <LinkedInLogo className={styles.socialMediaIcon}/>
      </Link>
      <Link className={styles.linkDiv} to={{pathname: "https://github.com/Xiokraze"}} target="_blank">
        <GitHubLogo className={styles.socialMediaIcon}/>
      </Link>
    </div>
  );
};

export default Footer;
