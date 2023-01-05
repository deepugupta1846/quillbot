import React from "react";
export const UpgradeLeftCardContent = (props) => {
  return (
    <>
      <div className="upgrade-left-card-content">
        <i className="fa-solid fa-check check-icon-free"></i>
        <label>{props.text}</label>
      </div>
    </>
  );
};
