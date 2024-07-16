import React from "react";
import "./Sidebar.css";
import { content } from "../../content/content";
import Image from "../../components/Image/Image";

const Sidebar = () => {
  const { sidebar } = content;
  const getSideBarItem = (image, label, className = "sidebar-item") => {
    return (
      <div className={className}>
        <span className="sidebar-icon">
          <Image src={image} alt={image + "-alt"} />
        </span>
        <span>{label}</span>
      </div>
    );
  };
  return (
    <div className="sidebar">
      {getSideBarItem("/assets/home.png", sidebar.home, "sidebar-item-home")}
      {getSideBarItem("/assets/transaction.png", sidebar.operation)}
      {getSideBarItem("/assets/map.png", sidebar.map)}
      {getSideBarItem("/assets/bars.png", sidebar.report)}
      {getSideBarItem("/assets/wires.png", sidebar.controlPanel)}
      <div className="block">
        <div className="top-image-container">
          <Image src="/assets/question.png" alt="Top" className="top-image" />
        </div>
        <div className="content">
          <h1>{sidebar.needHelp}</h1>
          <p>{sidebar.desc}</p>
          <button className="discover-button">{sidebar.discover}</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
