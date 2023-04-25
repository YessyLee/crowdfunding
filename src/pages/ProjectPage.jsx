import { useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
// import { oneProject } from "../data";

// Components
import PledgeForm from "../components/PledgeForm/PledgeForm";
import ProgressBar from "../components/ProgressBar/ProgressBar";


function ProjectPage() {
  //State
  const [project, setProjectData] = useState({ pledges: [] });
  const [owner, setOwner] = useState([]);

  //Hook
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      setProjectData(data);

    //convert userid to username
    const userId = data.owner;
      return fetch(`${import.meta.env.VITE_API_URL}users/${userId}`);
    })
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      return setOwner(data);
    });
  }, []);

  return (

    <body className="flex min-h-screen justify-center items-center">
      <div className="pt-24 pl-36 pr-36 mt-24">
        <div className="grid lg:grid-cols-2 md:lg:grid-cols-2 gap-8 pl-4 pr-4 lg:gap-16">
          
          <div>
            <img className="rounded-lg shadow-md w-full h-96 object-cover" src={project.image} />
          </div>
          
          <div className="bg-indigo-50 p-5 rounded-lg shadow-md">
            <h2 className="font-bold text-indigo-800 lg:text-3xl text-2xl mb-5">{project.title}</h2>
            
            <p className="text-slate-500 text-sm lg:text-lg">
            <h3 className="font-bold text-indigo-500 lg:text-xl text-lg mb-1">
              Campaign overview:</h3>
              <h3 className="text-slate-500 text-sm font-bold mb-3">Published by {owner.username} on {new Date(project.date_created).toLocaleDateString()}</h3>
              {project.description}</p>

              <p className="font-bold text-indigo-800 text-center lg:text-lg mb-1 lg:mt-10 mt-4">Campaign Goal</p> 
              <ProgressBar goal={project.goal} total={project.total} />
          </div>


          <div className="shadow-lg pt-10 mb-5 rounded-lg">
            <p className="font-bold text-indigo-500 text-center lg:text-2xl text-xl mb-3">{project.is_open ? <p>Status: Accepting Donations</p> : <p>Status: Goal Achieved</p>}</p>
            <PledgeForm project={project} /> 
          </div>

          <div className="mb-10 mt-10">
            <h3 className="font-bold text-indigo-500 text-center text-xl lg:text-2xl mb-5">Thank you for your donations!</h3>
            <ul>
             {project.pledges.map((pledgeData, key) => {
              return (
              <span className= "block h-15 bg-indigo-50 rounded-xl p-5 mb-3 text-slate-500 lg:text-lg" key={key}>
              ${pledgeData.amount} donated by {" "}
              {pledgeData.supporter ? pledgeData.supporter : "Anonymous"}
              <p className="font-bold ">"{pledgeData.comment}"</p>
              </span>
              );
            })}
            </ul>
          </div>
        </div>

          <div className="bg-gradient-to-r from-slate-900 from-10% via-sky-600 
via-30% to-indigo-900 to-90% rounded-lg shadow-2xl mt-10">
<div className="flex justify-between">
<h1 className="text-left lg:text-xl font-bold text-slate-100 p-6">Register 
today & start your very own futureproofME campaign.</h1>
<p className='ml-10 mr-10 text-white-100 text-left'><button type="button" 
className=" py-2 text-sm font-bold p-4 m-4 rounded-full text-slate-100 
text-center bg-pink-500 hover:bg-indigo-400 sm:text-lg "><Link to="/
registration">
Get Started!</Link></button></p>
</div>
</div>

        </div>
    </body>
  );
  }

export default ProjectPage;