import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Header from "./Header";
import Video from "../../common/Video/Video";
import Carousel from "../../common/ImageCarousel/ImageCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import homeImage from "./../../assets/logo/homeImage.png";
import logo from "./../../assets/logo/swa-brandlogo-icon-white.png";

const Dashboard = () => {
  const [scrolling, setScrolling] = useState(false);
  const carouselImages = [
    {
      id: 1,
      isVideo: false,
      src: "https://asset.swarovski.com/images/c_crop,g_xy_center,w_9114,h_5127,x_7392,y_3403/dpr_2.0,f_auto,q_auto,c_lfill,w_1824,h_868/swa-cms/SS22_BRAND_VISUAL-BODYP-WRIST-PINK-EXT-2-RSZD_OF_GL_300DPI_RGB/.jpg",
      alt: "Image 1",
      title: "Sale",
      subTitle: "Up to 30% off select styles",
      collectionButtons: [
        { title: "Shop Now", index: "button1" },
        { title: "Terms and Conditions", index: "button2" },
      ],
    },
    {
      id: 2,
      isVideo: true,
      src: "https://asset.swarovski.com/images/c_crop,g_xy_center,w_4297,h_5379,x_7392,y_3277/e_colorize:20,co_black/dpr_auto,f_auto,q_auto,c_lfill,w_759,h_950/swa-cms/SS22_BRAND_VISUAL-BODYP-WRIST-PINK-EXT-2-RSZD_OF_GL_300DPI_RGB/.jpg",
      alt: "Image 2",
      title: "Sale",
      subTitle: "Up to 30% off select styles",
      collectionButtons: [
        { title: "Shop Now", index: "button1" },
        { title: "Terms and Conditions", index: "button2" },
      ],
    },
  ];
  const categories = [
    "Sale",
    "New In",
    "Jwellery",
    "watches",
    "Acessories",
    "Decoration",
    "gift",
    "World of Swarovski",
    "outlet",
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderCategory = (category) => {
    return (
      <button class="button_home">
        <span>{category} </span>
      </button>
    );
  };

  const renderCategoryheaderContainer = () => {
    return (
      <div className={`headerdata ${scrolling ? "hidden" : ""}`}>
        <img
          className={`image ${scrolling ? "" : "hidden"}`}
          src={logo}
          alt="logo"
          width="680"
          height="80"
        ></img>
        <div
          style={{
            marginTop: 100,
            width: "100%",
          }}
        >
          {categories.map((category) => renderCategory(category))}
        </div>
      </div>
    );
  };
  return (
    <>
      <Header />
      <div class="container">
        {renderCategoryheaderContainer()}
        <Carousel carouselImages={carouselImages} />
      </div>
    </>
  );
};

export default Dashboard;
