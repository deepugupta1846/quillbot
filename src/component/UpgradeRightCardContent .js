import React from "react";
export const UpgradeRightCardContent = (props) => {
  return (
    <>
      <div className="upgrade-left-card-content">
        <i
          className="fa-solid fa-check check-icon-free"
          style={{ color: "#DC9E00" }}
        ></i>
        <label>{props.text}</label>
        <i className="fa-solid fa-info info-icon-free"></i>
      </div>
    </>
  );
};
