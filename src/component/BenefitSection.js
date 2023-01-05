import React from "react";
import "../css/benefit.css";
import { GraphCircleWithText } from "./GraphCircleWithText";
export const BenefitSection = () => {
  return (
    <>
      <div className="benefit-container">
        <div className="benefit-header">
          <h1>Write better, faster, and clearer instantly</h1>
          <label>
            QuillBot is trusted by students, professional writers, and business
            people who want to write more effectively.
          </label>
        </div>
        <div className="graph-circle-container">
          <div className="graph-circle-content">
            <div>
              <GraphCircleWithText
                percent="75%"
                number="75%"
                text="time saved"
                title="Average time savings per writing project."
              />
            </div>
            <div>
              <GraphCircleWithText
                percent="100%"
                number="50"
                text="million"
                title="Trusted by millions worldwide."
              />
            </div>
            <div>
              <GraphCircleWithText
                percent="85%"
                number="85%"
                text="of students"
                title="Who reported their grades improved after using QuillBot"
              />
            </div>
          </div>
        </div>
        <div className="benefit-footer">
          <div>
            <button>Upgrade to Premium</button>
          </div>
          <div>
            <h2>100% Money-Back Guarantee </h2>
            <p>
              Changed your mind? We’ll refund your payment within 3 days of
              purchase.
            </p>
          </div>
          <div>
            <h2>Pause Your Subscription</h2>
            <p>Taking a break? Your subscription also pauses when you do!</p>
          </div>
        </div>
      </div>
    </>
  );
};