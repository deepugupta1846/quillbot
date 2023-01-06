import React, { useEffect, useState } from "react";
import "../css/header.css";
import { img } from "../data";
import { header_title_text_data } from "../data";
import { HeaderCardContent } from "./HeaderCardContent";
export const Header = () => {
  const imagedata = [...img];
  const [imageurl, setImageUrl] = useState(imagedata[3]);

  const text_data = [...header_title_text_data];
  const [progressWidth, setProgressWidth] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
  });
  const [titleColor, setTitleColor] = useState({
    one: "#308140",
    two: "#308140",
    three: "#308140",
    four: "#308140",
  });

  const increseNumberEveryFiveSecond = (n, i) => {
    for (let j = 1; j <= n; j++) {
      setTimeout(() => {
        if (i === 0) {
          setProgressWidth({ one: j, two: 0, three: 0, four: 0 });
          setTitleColor({
            one: "#000000",
            two: "#308140",
            three: "#308140",
            four: "#308140",
          });
        } else if (i === 1) {
          setProgressWidth({ one: 0, two: j, three: 0, four: 0 });
          setTitleColor({
            one: "#308140",
            two: "#000000",
            three: "#308140",
            four: "#308140",
          });
        } else if (i === 2) {
          setProgressWidth({ one: 0, two: 0, three: j, four: 0 });
          setTitleColor({
            one: "#308140",
            two: "#308140",
            three: "#000000",
            four: "#308140",
          });
        } else if (i === 3) {
          setProgressWidth({ one: 0, two: 0, three: 0, four: j });
          setTitleColor({
            one: "#308140",
            two: "#308140",
            three: "#308140",
            four: "#000000",
          });
        }
      }, j * 50);
    }
  };
  const increseOneNumberEveryFiveSecond = (n) => {
    for (let j = 1; j <= n; j++) {
      setTimeout(() => {
        setProgressWidth({ one: 0, two: 0, three: 0, four: j });
        setTitleColor({
          one: "#308140",
          two: "#308140",
          three: "#308140",
          four: "#000000",
        });
      }, j * 50);
    }
  };
  useEffect(() => {
    increseOneNumberEveryFiveSecond(100);
    let i = 0;
    setInterval(() => {
      increseNumberEveryFiveSecond(100, i);
      setImageUrl(imagedata[i]);
      i = i + 1;
      if (i >= imagedata.length) {
        i = 0;
      }
    }, 5000);
  }, []);
  return (
    <>
      <div className="header-container">
        <div className="header-title">
          <h1>Save time and write with confidence</h1>
          <button>Upgrade to QuillBot Premium</button>
        </div>
        <div className="header-content">
          <div className="header-left-content">
            <div className="header-left-card">
              <img src={imageurl} alt="" />
            </div>
          </div>
          <div className="header-right-content">
            {/* {text_data.map((data, index) => {
              return (
                <HeaderCardContent
                  title={data.title}
                  text={data.text}
                  progressWidth={progressWidth}
                  updateCounter={imageUpdateData}
                />
              );
            })} */}
            <HeaderCardContent
              title={text_data[0].title}
              text={text_data[0].text}
              progressWidth={progressWidth.one}
              titleColor={titleColor.one}
            />
            <HeaderCardContent
              title={text_data[1].title}
              text={text_data[1].text}
              progressWidth={progressWidth.two}
              titleColor={titleColor.two}
            />
            <HeaderCardContent
              title={text_data[2].title}
              text={text_data[2].text}
              progressWidth={progressWidth.three}
              titleColor={titleColor.three}
            />
            <HeaderCardContent
              title={text_data[3].title}
              text={text_data[3].text}
              progressWidth={progressWidth.four}
              titleColor={titleColor.four}
            />
          </div>
        </div>
      </div>
    </>
  );
};
