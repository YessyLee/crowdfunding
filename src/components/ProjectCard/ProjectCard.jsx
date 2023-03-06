import { Link } from "react-router-dom";
import React, { Component } from 'react';
// 
import "./ProjectCard.css";
import ProgressBar from "../ProgressBar/ProgressBar";


function ProjectCard(props) {
  const { projectData } = props;

  return (
    <div className="project-card">
      <div>
        <Link to={`/project/${projectData.id}`}>
          <img src={projectData.image} />
          <h3>{projectData.title}</h3>
        </Link>
      </div>

      <div>
        <ProgressBar goal={projectData.goal} total={projectData.total} />
      </div>

    </div>
  );
}

export default ProjectCard;