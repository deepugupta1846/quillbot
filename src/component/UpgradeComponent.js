import React from "react";
import "../css/upgrade.css";
import { UpgradeLeftCardContent } from "./UpgradeLeftCardContent";
import { UpgradeRightCardContent } from "./UpgradeRightCardContent ";
export const UpgradeComponent = () => {
  const textData = [
    "125 words in the Paraphraser",
    "Standard and Fluency modes",
    "3 synonym options",
    "1 Freeze word or phrase",
    "1200 words in the Summarizer",
    "Faster processing speed",
    "Advanced grammar rewrites",
    "Compare Modes (Desktop only)",
    "Plagiarism Checker*",
    "Tone detection",
  ];
  const premiumTextData = [
    "Unlimited words in the Paraphraser",
    "Standard, Fluency, Expand, Shorten, Formal, Simple, and Creative modes",
    "4 synonym options",
    "Unlimited Freeze words and phrases",
    "6000 words in the Summarizer",
    "Faster processing speed",
    "Advanced grammar rewrites",
    "Compare Modes (Desktop only)",
    "Plagiarism Checker*",
    "Tone detection",
  ];
  return (
    <>
      <div className="upgrade-container">
        <h1>Experiance the full power of QuillBot</h1>
        <div className="upgrade-card-container">
          <div className="upgrade-left-card-container">
            <div className="upgrade-left-card-title">
              <label>FREE</label>
            </div>
            <div className="upgrade-left-card-button">
              <button>Sign Up - It's Free</button>
            </div>
            {textData.map((data, index) => {
              return (
                <>
                  <div id={index}>
                    <UpgradeLeftCardContent text={data} />
                  </div>
                </>
              );
            })}
            <div className="upgrade-left-card-content-footer">
              <label>No Credit Card Required</label>
            </div>
          </div>
          <div className="upgrade-right-card-container">
            <div
              className="upgrade-left-card-title"
              style={{ backgroundColor: "#DC9E00" }}
            >
              <label>PREMIUM</label>
            </div>
            <div className="upgrade-left-card-button">
              <button style={{ backgroundColor: "#DC9E00" }}>
                Upgrade to Premium
              </button>
            </div>
            {premiumTextData.map((data, index) => {
              return (
                <div id="index">
                  <UpgradeRightCardContent text={data} />
                </div>
              );
            })}
            <div className="upgrade-left-card-content-footer">
              <label>3-Days Money Back Guarantee</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
