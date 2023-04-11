import { Link } from "react-router-dom";
import React, { Component } from 'react';
// 
import "./ProjectCard.css";
import ProgressBar from "../ProgressBar/ProgressBar";


function ProjectCard(props) {
  const { projectData } = props;

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-lg">
      <div>
        <Link to={`/project/${projectData.id}`}>
          <img className="w-full h-64 sm:h-48 object-cover" src={projectData.image} />
          <h3 className="font-bold text-center text-lg text-indigo-800 mt-3 ml-5 mb-1 mr-4">{projectData.title}</h3>
        </Link>
      </div>

      <div className="ml-4 mb-4 mr-4 pb-5">
        <ProgressBar goal={projectData.goal} total={projectData.total} />
      </div>

    </div>
  );
}

export default ProjectCard;