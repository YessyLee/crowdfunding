//Data
import { useState, useEffect} from "react";
import {useParams} from "react-router-dom";
// 
// import { oneProject } from "../data";

// Components
import PledgeForm from "../components/PledgeForm/PledgeForm";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import ProjectCard from "../components/ProjectCard/ProjectCard";
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

    <body className="flex min-h-screen justify-center items-center">
      
      <div className="pt-24 pl-20 pr-20 mt-24">
        <div className="grid grid-cols-2 gap-8">
          
          <div>
            <img className="rounded-md shadow-md mb-2" src={project.image} />
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-md shadow-md">
            <h2 className="font-bold text-indigo-800 text-3xl mb-3">{project.title}</h2>
            
            <p className="text-slate-500 text-lg">
            <h3 className="font-bold text-indigo-500 text-xl mb-1">
              Campaign overview:</h3>
              <h3 className="text-slate-500 text-sm font-bold mb-2">Published by {project.owner} on {new Date(project.date_created).toLocaleDateString()}</h3>
              {project.description}</p>

              <p className="font-bold text-indigo-800 text-center text-lg mb-1 mt-5">Campaign Goal</p> 
              <ProgressBar goal={project.goal} total={project.total} />
          </div>


          <div className="border-dotted border-2 border-indigo-100 p-5 mb-5">
            <p className="font-bold text-indigo-500 text-2xl mb-3">{project.is_open ? <p>Status: Accepting Donations</p> : <p>Status: Goal Achieved</p>}
</p>
            <PledgeForm project={project} /> 
          </div>

          <div className="mb-10 mt-5">
            <h3 className="font-bold text-indigo-500 text-2xl mb-3">Thank you for your donations!</h3>
            <ul>
             {project.pledges.map((pledgeData, key) => {
              return (
              <span className= "block h-15 bg-indigo-50 rounded-xl p-3 mb-3 text-slate-500 text-lg" key={key}>
              ${pledgeData.amount} donated by {" "}
              {pledgeData.supporter ? pledgeData.supporter : "Anonymous"}
              <p className="font-bold ">"{pledgeData.comment}"</p>
            </span>
          );
          })}
          </ul>
          </div>

        </div>
      </div>
    </body>
  );
      }

export default ProjectPage;