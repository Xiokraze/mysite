import styles from "./SideNavBarOption.module.css";

const SideNavBarOption = ({ onclick, isFocused, title }) => {
  const cssClass = isFocused ? styles.liOptionFocused : styles.liOption;

  return (
    <li onClick={onclick} className={cssClass}>
      {title}
    </li>
  );
};

export default SideNavBarOption;
