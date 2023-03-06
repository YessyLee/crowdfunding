//Data
import { useState, useEffect} from "react";
import {useParams} from "react-router-dom";
// 
// import { oneProject } from "../data";

// Components
import PledgeForm from "../components/PledgeForm/PledgeForm";
import ProgressBar from "../components/ProgressBar/ProgressBar";
// import ProjectForm

function ProjectPage() {
  //State
  const [project, setProjectData] = useState({ pledges: [] });

  //Hook
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      setProjectData(data);
    });
  }, []);


  return (
    <div>
      <h2>{project.title}</h2>
      <h3>Created at: {new Date(project.date_created).toLocaleDateString()}</h3>
      <h3>Created by: {project.owner}</h3>
      {/* <h3>{`Status: ${project.is_open ? <p>Still open</p> : <p>Closed</p> }`}</h3> */}
      <p>Status: {project.is_open ? <p>Still open</p> : <p>Closed</p>}</p>
      <ProgressBar goal={project.goal} total={project.total} />
      <p>{project.description}</p>
      <img src={project.image} />
    <h2>Donate now:</h2>
      <PledgeForm project={project} /> 

      <h3>Pledges received:</h3>
      <ul>
        {project.pledges.map((pledgeData, key) => {
          return (
            <li key={key}>
              ${pledgeData.amount} donated by {" "}
              {pledgeData.supporter ? pledgeData.supporter : "Anonymous"} 
              {'\n'} | Comment: {pledgeData.comment}
            </li>
          );
        })}
      </ul>

    {/* <PledgeForm project={project} />  */}
      {/* <div> */}
          {/* <h3>Pledges:</h3> */}
          {/* <ul> */}
              {/* {project.pledges && */}
                  {/* // project.pledges.map((pledgeData, key) => ( */}
                      {/* // <li key={key}> */}
                          {/* {new Date(pledgeData.date_created).toLocaleString()}:  */}
                          {/* <p>${pledgeData.amount} from {pledgeData.supporter}</p> */}
                          {/* <p>{pledgeData.comment}</p> */}
                      {/* </li> */}
                  {/* // ))} */}
          {/* </ul> */}
      {/* </div> */}
    </div>
  );
}

export default ProjectPage;