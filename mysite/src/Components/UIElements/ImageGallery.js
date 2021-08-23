import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./ImageGallery.module.css";

// https://www.npmjs.com/package/react-responsive-carousel

const ImageGallery = ({ title, images }) => {
  return (
    <div className={styles.imgRootDiv}>
      <h2>{title}</h2>
      <Carousel autoPlay interval="5000" transitionTime="2000" infiniteLoop="true">
        {images.map((image) => (
          <img key={image} alt="" src={image} className={styles.img}/>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageGallery;
