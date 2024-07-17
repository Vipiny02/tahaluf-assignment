import React, { useState } from "react";
import "./Header.css";
import { content } from "../../content/content";
import Image from "../../components/Image/Image";

const Header = ({ name }) => {
  const { header } = content;
  const [dropdownToggle, setDropdownToggle] = useState(false);

  const handleToggle = () => {
    setDropdownToggle((prevState) => !prevState);
  };
  const styles = {
    accIconStyles: {
      height: "20px",
      width: "20px",
      margin: "10px",
    },
    webIcon: { height: "25px", width: "30px" },
    bellIcon: { height: "28px", width: "25px" },
    profilePhoto: { height: "50px", width: "60px" },
  };

  const getCountryOps = (btnName, flag) => {
    return (
      <div style={{ display: "flex" }} className="dropdown-content-items">
        <Image src={flag} alt={flag + "alt"} styles={styles.accIconStyles} />
        <a href="/" onClick={(e) => e.preventDefault()}>
          {btnName}
        </a>
      </div>
    );
  };
  const getDropdownOps = (btnName, src) => {
    return (
      <div style={{ display: "flex" }} className="dropdown-content-items">
        <Image src={src} alt={src + "alt"} styles={styles.accIconStyles} />
        <a href="/" onClick={(e) => e.preventDefault()}>
          {btnName}
        </a>
        <button className="dropdown-button-right">▼</button>
      </div>
    );
  };

  const getSearchInput = () => {
    return (
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <button className="search-icon">{header.searchIconSvg}</button>
      </div>
    );
  };
  return (
    <header className="header">
      <div className="logo">
        <Image src={"/assets/logo.png"} alt="logo" className="logo-image" />
      </div>
      <div className="right-side">
        {getSearchInput()}

        <button className="web-button" onClick={handleToggle}>
          <Image
            src="/assets/web-icon.png"
            alt="web-icon"
            className="logo-image"
            styles={styles.webIcon}
          />
        </button>
        {dropdownToggle && (
          <div className="dropdown-content-country">
            {getCountryOps(header.engCountry, "/united-kingdom.png")}
            <hr></hr>
            {getCountryOps(header.uaeCountry, "./united-arab-emirates.png")}
          </div>
        )}
        <button className="notifications-icon">
          <Image
            src="/assets/bell-icon.png"
            alt="bell-icon"
            styles={styles.bellIcon}
          />
        </button>
        <div className="profile-info">
          <Image
            src="/assets/profile-photo.png"
            alt="profile-photo"
            className="profile-pic"
            styles={styles.profilePhoto}
          />
          <div className="profile-name-div">
            <span className="profile-name">{name}</span>
            <span className="profile-roll">{header.roll}</span>
          </div>
          <hr />
          <div className="dropdown">
            <p>
              <i className="arrow down"></i>
            </p>
            <div className="dropdown-content">
              {getDropdownOps(header.myAcc, header.accIcon)}
              {getDropdownOps(header.settings, header.settingsIcon)}
              {getDropdownOps(header.logout, header.logoutIcon)}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
