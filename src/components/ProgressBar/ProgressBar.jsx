import React from "react";

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
  <div >
    <div className="w-full bg-indigo-900 rounded-full h-6 dark:bg-gray-700">
          {/* <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 45%">{ progressStyle }</div> */}
      <div className="relative">
        {total < goal ? (
          <div style={progressStyle} className="bg-indigo-300 p-3 leading-none rounded-full"></div>
        ) : (
          <div style={completeGoalStyle} className="bg-indigo-400 p-3 leading-none rounded-full"></div>
        )}
        <div className="text-xs uppercase font-bold absolute top-0 ml-1 mt-1">
          {progressPercentage}
          </div>
      </div>

    {total < goal ? (
      <p className="pt-1 lg:text-lg text-sm text-center text-gray-500 font-bold">
        ${total > 0 ? total : "0"} raised of ${goal}</p>
    ) : (
      <p className="pt-1 lg:text-lg text-sm text-center text-orange-500 font-bold">
        Goal reached 🚀| Total of ${total} raised!
      </p>
    )}

    
    
    
    </div>
  </div>
  );
};

export default ProgressBar;
