import { Link } from "react-router-dom";

import "./ProjectCard.css"

function ProjectCard(props) {
  const { projectData } = props;

  return (
    <div>
      <Link to="/project">
        <img src={projectData.image} />
        <h3>{projectData.title}</h3>
      </Link>
    </div>
  );
}

export default ProjectCard;