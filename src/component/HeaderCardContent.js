import React from "react";

export const HeaderCardContent = (props) => {
  return (
    <>
      <div className="header-right-card">
        <div
          className="header-right-card-title"
          style={{ color: props.titleColor }}
        >
          {props.title}
        </div>
        <div className="header-right-card-text">{props.text}</div>
        <div className="header-progress-bar">
          <div
            className="header-progress-bar-content"
            style={{
              width: `${props.progressWidth}%`,
              height: "100%",
              backgroundColor: "#308140",
              borderRadius: "20px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
