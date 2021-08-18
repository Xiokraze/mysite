import me from "../../Assets/me.jpg";
import styles from "./HomePage.module.css";
import Descriptors from "../UIElements/Descriptors";


const HomePage = () => {
  return (
    <div className={styles.rootHomeDiv}>
      <Descriptors/>
      <div className={styles.homeDiv}>
        <img src={me} alt="" className={styles.meContainer} />
        <div className={styles.aboutMe}>
          <h2>About Me</h2>
          <p>
            I enjoy coding, gaming, DIY projects, and puzzles. My favorite
            programming language is C# with React.js a fierce competitor.
          </p>
          <p>
            I've acquired my MS. in Computer Science, my B.S. in Criminal
            Justice, and served in the U.S. Army as an infantryman. My
            professional goal is to pursue a career in video game or software
            development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
