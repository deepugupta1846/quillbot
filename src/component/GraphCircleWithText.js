import React, { useEffect, useState } from "react";
export const GraphCircleWithText = (props) => {
  const percent = props.percent;
  const number = props.number;
  const [percentWidth, setWidthPercent] = useState(0);
  const [showNumber, setShowNumber] = useState(0);
  const increseOneNumberEveryFiveSecond = (n) => {
    for (let j = 1; j <= n; j++) {
      setTimeout(() => {
        setWidthPercent(j);
        setShowNumber(j);
      }, j * 50);
    }
  };

  useEffect(() => {
    increseOneNumberEveryFiveSecond(percent);
  }, []);
  return (
    <>
      <div>
        <div
          className="circle per-75"
          style={{
            backgroundImage: `conic-gradient(#499557 ${percentWidth}%, #eeeeee 0)`,
          }}
        >
          <div className="inner">
            <label className="percentage">
              {showNumber}
              {props.symboll}
            </label>
            <label className="percentage-title">{props.text}</label>
          </div>
        </div>
        <div className="circle-title">{props.title}</div>
      </div>
    </>
  );
};
