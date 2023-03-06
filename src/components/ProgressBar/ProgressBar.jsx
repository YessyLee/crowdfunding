import React from "react";
import "./ProgressBar.css";

//total is not sum up on the back end model, need to fix DRF first
const ProgressBar = ({ goal, total }) => {
    // const total = amount.length
    const progressPercentage = Math.round((total / goal) * 100) + "%";
    const remainder = Math.round(goal - total, 2);
    console.log(progressPercentage);
    const progressStyle = {
        width: progressPercentage,
  };
  return (
    <div>
      <div>
        <div style={progressStyle} id="progress"></div>
      </div>
      <h3>
        Donation goal: ${total} of ${goal}.
      </h3>
    </div>
  );
};

export default ProgressBar;
