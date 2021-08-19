import styles from "./LoadingCode.module.css";

const LoadingCode = ({ animationClass, hideAnimation }) => {
  var l1 = styles.hide;
  var l2 = styles.hide;
  var l3 = styles.hide;
  var l4 = styles.hide;

  switch (animationClass) {
    case "loadingDivShow":
      l1 = styles.loadingDivData;
      l2 = styles.loadingDivData;
      l3 = styles.loadingDivData;
      l4 = styles.loadingDivData;
      break;
    case "loadingDivHide":
      l1 = styles.loadingDivDataShow1;
      l2 = styles.loadingDivDataShow2;
      l3 = styles.loadingDivDataShow3;
      l4 = styles.loadingDivDataShow4;
      break;
    default:
      console.log("none");
  }
  var line1 = "const loadMenu = (page) => {";
  var line2 = "\tsetPage(page);";
  var line3 = "\tloadAnimation();";
  var line4 = "}";

  var animateClass =
    animationClass === "loadingDivShow"
      ? styles.loadingDivShow
      : styles.loadingDivHide;

  return (
    <div className={styles.loadingDivContainer}>
      <div className={animateClass} onTransitionEnd={hideAnimation}>
        <p className={l1}>{line1}</p>
        <p style={{ marginLeft: 1 + "rem" }} className={l2}>
          {line2}
        </p>
        <p style={{ marginLeft: 1 + "rem" }} className={l3}>
          {line3}
        </p>
        <p className={l4}>{line4}</p>
      </div>
    </div>
  );
};

export default LoadingCode;
