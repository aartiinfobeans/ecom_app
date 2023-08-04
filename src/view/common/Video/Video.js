import React, { useRef } from "react";
import "./Video.css"; // Import CSS file for styling

const Video = () => {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    // Play the video from the beginning when it ends
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <video
      ref={videoRef}
      className="background-video"
      autoPlay
      loop
      muted
      onEnded={handleVideoEnded}
    >
      <source
        src="https://asset.swarovski.com/videos/f_auto,h_1080,q_auto/v1673009440/swa-cms/videos/B2C_BRAND_VIDEO-VD-WEB-TOP-TEASER-GLOBAL-HOR-6SEC-NOVO_VID_GL_25FPS_H264/vd_1_2023-tt.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default Video;
