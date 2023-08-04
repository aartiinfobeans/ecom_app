import React from "react";

import Video from "../Video/Video";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerWithInsideTitle from "../../components/CollectionComponents/BannerWithInsideTitle/BannerWithInsideTitle";

const ImageCarousel = ({ carouselImages }) => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      useKeyboardArrows={true}
    >
      {carouselImages.map((image) => (
        <div key={image.id} style={{ height: 700 }}>
          {image.isVideo ? (
            <Video />
          ) : (
            <BannerWithInsideTitle image={image} />
            // <img className="myImg" src={image.src} alt={image.alt} />
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
