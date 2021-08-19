import styles from "./LoadingCode.module.css";

const LoadingCode = ({
  animationClass,
  hideAnimation,
  loadingSlideRightAnimationComplete,
}) => {
  var l1 = styles.hide;
  var l2 = styles.hide;
  var l3 = styles.hide;
  var l4 = styles.hide;
  var l5 = styles.hide;
  var l6 = styles.hide;

  switch (animationClass) {
    case "loadingDivShow":
      l1 = styles.loadingDivData;
      l2 = styles.loadingDivData;
      l3 = styles.loadingDivData;
      l4 = styles.loadingDivData;
      l5 = styles.loadingDivData;
      l6 = styles.loadingDivData;
      break;
    case "loadingDivHide":
      l1 = styles.l1;
      l2 = styles.l2;
      l3 = styles.l3;
      l4 = styles.l4;
      l5 = styles.l5;
      l6 = styles.l6;
      break;
    default:
      break;
  }
  var line1 = "while (alive)";
  var line2 = "eat();";
  var line3 = "sleep();";
  var line4 = "code();";
  var line5 = "reapeat();";
  var line6 = "}";

  var animateClass =
    animationClass === "loadingDivShow"
      ? styles.loadingDivShow
      : styles.loadingDivHide;

  return (
    <div className={styles.loadingDivContainer}>
      <div className={animateClass} onTransitionEnd={hideAnimation}>
        <p className={l1}>{line1}</p>
        <p className={l2}>{line2}</p>
        <p className={l3}>{line3}</p>
        <p className={l4}>{line4}</p>
        <p className={l5}>{line5}</p>
        <p className={l6} onAnimationEnd={loadingSlideRightAnimationComplete}>
          {line6}
        </p>
      </div>
    </div>
  );
};

export default LoadingCode;
