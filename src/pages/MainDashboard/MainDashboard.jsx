import React, { useState } from "react";
import "./Dashboard.css";
import TripRoute from "../../features/TripRoute/TripRoute";
import PieChart from "../../features/PieChart/PieChart";
import Banner from "../../features/Banner/Banner";
import { content } from "../../content/content";
import Image from "../../components/Image/Image";

const Dashboard = ({ name }) => {
  const { dashboard } = content;
  const { items, images, container1, cards } = dashboard;
  const [isOpenArr, setIsOpenArr] = useState([]);
  const toggleDropdown = (id) => {
    if (isOpenArr.includes(id)) {
      setIsOpenArr(isOpenArr.filter((item) => item !== id));
    } else setIsOpenArr([...isOpenArr, id]);
  };

  const getContainerOneBtns = (src) => {
    return (
      <button className="web-button">
        <Image src={src} className="img-style" alt={src + "-alt"} />
      </button>
    );
  };

  const getCards = (obj) => (
    <div className="child-div-2">
      <div>
        <Image src={obj.src} styles={{ height: "40px" }} />
      </div>
      <div>
        <span style={{ fontSize: "16px" }}>
          <b>{obj.title}</b>
        </span>
        <br />
        <span style={{ fontSize: "14px", color: "#6D7485" }}>
          {obj.description}
        </span>
      </div>
    </div>
  );

  return (
    <div className="dashboard-container">
      <p style={{ paddingLeft: "40px" }}>Welcome! {name}</p>
      <div className="shape">
        <div className="circle"></div>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <div className="parent-div-content-1">
            <div className="left-div">
              <p>{container1.title}</p>
            </div>
            <div className="right-div">
              {getContainerOneBtns("/assets/gallery.png")}
              {getContainerOneBtns("/assets/tripleLines.png")}
            </div>
          </div>
          {items.map((el, i) => {
            return (
              <div className="item-container" key={i}>
                <div className="dropdown-div">
                  <div className="dropdown-left">
                    <Image
                      src="/assets/ddcar.png"
                      alt="Vehicle"
                      className="vehicle-image"
                    />
                    <div className={`${el.dot}-dot`}></div>
                    <p>{el.description}</p>
                  </div>
                  <div
                    className="dropdown-right"
                    onClick={() => toggleDropdown(el.id)}
                  >
                    <p>
                      {" "}
                      <i className="arrow down"> </i>
                    </p>
                  </div>
                </div>
                {(isOpenArr || []).includes(el.id) && (
                  <div className="camera-container-main">
                    <div className="camera-container">
                      {(images || []).map((el, index) => (
                        <div className="camera-div" key={index}>
                          <Image
                            src={el["CPU Temp"] || `/assets/${el.img}.png`}
                            alt={`/assets/${el.img} ${index}`}
                            className="camera-image"
                          />
                          <p className="online-text">{el.img}</p>
                          <p className="imgDesc">{el.imgDesc}</p>

                          <button
                            className={`${
                              el.img === "CPU Temp"
                                ? "status-btn-red"
                                : " status-btn"
                            }`}
                          >
                            {el.btnLabel}
                            <span
                              className={`${
                                el.img === "CPU Temp"
                                  ? "red-btn-dot"
                                  : "green-btn-dot"
                              }`}
                            ></span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* Container2  */}
        <div className="column-div">
          <div className="child-div-1">
            <PieChart />
          </div>
          <div className="column-after">
            {getCards(cards[0])}
            {getCards(cards[1])}
          </div>
          <div className="column-after">
            {getCards(cards[2])}
            {getCards(cards[3])}
          </div>
        </div>
      </div>

      {/* BANNER  */}
      <Banner />

      {/* TRIP ROUTE  */}
      <TripRoute />
    </div>
  );
};

export default Dashboard;
