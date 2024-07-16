import React from "react";
import "./TripRoute.css";
import { content } from "../../content/content";
import Image from "../../components/Image/Image";

const TripRoute = () => {
  const { tripRoute } = content;
  const {
    title,
    description,
    selectData,
    autoGenerate,
    add,
    startPoint,
    wayPoint,
    stopPoint,
    btnCancel,
    btnSave,
    plus,
  } = tripRoute;
  return (
    <div className="trip-route-container">
      <div style={{ textAlign: "left", paddingTop: "25px" }}>
        <h5>{title}</h5>
      </div>
      <div className="map-container">
        <div className="form-container">
          <h2>{title}</h2>
          <p>{description}</p>
          <hr />
          <div className="input-row">
            <input type="text" placeholder="Trip Name" className="trip-input" />
            <select className="sector-select">
              <option value="">{selectData.selectTitle}</option>
              <option value="sector1">{selectData.sector1}</option>
              <option value="sector2">{selectData.sector2}</option>
            </select>
          </div>
          <hr />
          <div className="auto-generate">
            <div>
              <p>{autoGenerate} &#9432;</p>
            </div>
            <div className="img-container">
              <Image
                src="/assets/autogenerate.png"
                className="img-styles"
                alt="autogenerate-alt"
              />
            </div>
          </div>
          <hr />

          <div className="point-buttons">
            <div className="point-container">
              <h5>
                {add} <br />
                {startPoint}
              </h5>
              <button className="point-button red-border">
                <span className="plus-icon">{plus}</span>
              </button>
            </div>
            <div className="point-container">
              <h5>
                {add} <br />
                {wayPoint}
              </h5>
              <button className="point-button yellow-border">
                <span className="plus-icon">{plus}</span>
              </button>
            </div>
            <div className="point-container">
              <h5>
                {add} <br />
                {stopPoint}
              </h5>
              <button className="point-button red-border">
                <span className="plus-icon">{plus}</span>
              </button>
            </div>
          </div>
          <div className="form-buttons">
            <button className="cancel-button">{btnCancel}</button>
            <button className="save-button">{btnSave}</button>
          </div>
        </div>
        <div className="map-background">
          <Image src="/assets/map-dummy.jpg" alt="Map" className="map-image" />
        </div>
      </div>
    </div>
  );
};

export default TripRoute;
