import React from "react";
import "./Banner.css";
import { content } from "../../content/content";
import Image from "../../components/Image/Image";

const Banner = () => {
  const { banner } = content;
  return (
    <div className="banner-container">
      <div className="text-content">
        <h1>
          {banner.banner_p1}{" "}
          <span style={{ color: "#F9B419" }}>{banner.banner_p3}</span>{" "}
          {banner.banner_p2}
        </h1>
        <p>{banner.banner_desc}</p>
      </div>
      <Image
        src="/assets/banner-img.png"
        alt="Decorative Image"
        className="decorative-image"
      />
    </div>
  );
};

export default Banner;
