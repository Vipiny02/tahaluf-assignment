import React from "react";

const Image = ({ src, alt = "", className = "", styles = {} }) => (
  <img src={src} alt={alt} className={className} style={styles} />
);

export default Image;
