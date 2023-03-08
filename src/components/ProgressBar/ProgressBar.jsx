import React from "react";
import "./ProgressBar.css";

//total is not sum up on the back end model, need to fix DRF first
const ProgressBar = ({ goal, total }) => {
  const progressPercentage = Math.round((total / goal) * 100) + "%";
  const remainder = Math.round(goal - total, 2);
  console.log(progressPercentage);
  const progressStyle = {
    width: progressPercentage,
  };
  const completeGoalStyle = {
    width: "100%",
  };

return (
  <div>
    <div className="w-full bg-indigo-900 rounded-full h-7 dark:bg-gray-700">
          {/* <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 45%">{ progressStyle }</div> */}
      <div>
        {total < goal ? (
          <div style={progressStyle} className="bg-indigo-300 text-3xl font-medium text-blue-300 text-center p-3.5 leading-none rounded-full"></div>
        ) : (
      <div style={completeGoalStyle} className="bg-indigo-400 text-md font-medium text-blue-600 text-center p-3.5 leading-none rounded-full"></div>
      )}
    </div>
    {total < goal ? (
      <p className="pt-1 text-center text-gray-500 font-bold">
        ${total > 0 ? total : "0"} raised of ${goal}</p>
    ) : (
      <p>
        Goal reached 🚀| Total of ${total} raised!
      </p>
    )}
    </div>
  </div>
  );
};

export default ProgressBar;
