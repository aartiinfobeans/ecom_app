import React from "react";

import Video from "../../../common/Video/Video";
import "./BannerWithInsideTitle.css";
const BannerWithInsideTitle = ({ image }) => {
  return (
    <>
      {image.isVideo ? (
        <>
          <Video />
          <div
            style={{
              position: "absolute",
              top: 350,
              left: 80,
              zIndex: 200,
              textAlign: "left",
              color: "white",
            }}
          >
            <h2 class="content_title">
              {image.title}
              <br />
              {image.subTitle}
            </h2>
            {image.collectionButtons.map((button) => (
              <button className="content_button">{button.title}</button>
            ))}
          </div>
        </>
      ) : (
        <>
          <img className="myImg" src={image.src} alt={image.alt} />
          <div
            style={{
              position: "absolute",
              top: 350,
              left: 80,
              zIndex: 200,
              textAlign: "left",
              color: "white",
            }}
          >
            <h2 class="content_title">
              {image.title}
              <br />
              {image.subTitle}
            </h2>
            {image.collectionButtons.map((button) => (
              <button className="content_button">{button.title}</button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default BannerWithInsideTitle;
