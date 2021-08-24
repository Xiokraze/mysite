import styles from "./SideNavBar.module.css";

const SideNavBar = ({children}) => {
  return (
    <div className={styles.itemDiv}>
      <ul className={styles.ulList}>
        {children}
      </ul>
    </div>
  );
};

export default SideNavBar;
