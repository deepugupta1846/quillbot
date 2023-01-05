import React from "react";
export const GraphCircleWithText = (props) => {
  return (
    <>
      <div>
        <div
          className="circle per-75"
          style={{
            backgroundImage: `conic-gradient(#499557 ${props.percent}, #eeeeee 0)`,
          }}
        >
          <div className="inner">
            <label className="percentage">{props.number}</label>
            <label className="percentage-title">{props.text}</label>
          </div>
        </div>
        <div className="circle-title">{props.title}</div>
      </div>
    </>
  );
};
