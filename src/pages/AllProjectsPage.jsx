import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProjectCard from "../components/ProjectCard/ProjectCard";

function AllProjectsPage() {
  // State
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects/`) //grab the url from env
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);

  //Sort by date created
  function compare(a, b) {
    if (a.date_created < b.date_created) {
      return 1;
    }
    if (a.date_created > b.date_created) {
      return -1;
    }
    return 0;
  }
  //So projects will appear in date order
  const latestProject = projectList.sort(compare);

  return (
    <body className="flex min-h-screen justify-center items-center">
      <div className="pt-24 mt-24">
        <div>
          <h2 className="text-3xl text-center font-bold text-indigo-900">Support your fellow FutureProofME Campaigners</h2>
          <p className="text-slate-600 p-5 ml-10 mr-10 text-lg text-center">FutureProofME is a crowdfunding platform to help you and your peers raise funds for education. FutureProofME can help you overcome financial barriers that may otherwise prevent you from pursuing your desired career. By using FutureProofME, you can create campaigns to raise funds for your educational expenses, including tuition fees, exam certification, textbooks, and other course materials.</p>
        
          <p className="font-bold text-center text-lg text-indigo-500 pb-10"><Link className="text-indigo-800" to="/registration">SIGN UP NOW</Link> to create your campaign or to donate. Now it's time to future proof yourself and your peers! 🚀</p>
        </div>

        <div>
          <h1 className="pt-3 pb-3 ml-10 mr-10 bg-indigo-100 text-3xl font-bold text-center text-indigo-900 rounded-md">Current Campaigns</h1>
        </div>

        <div className="p-10">
          <div className="grid grid-cols-3 pl-10 pr-10 gap-8">
            {latestProject.map((project, key) => {
              return <ProjectCard key={key} projectData={project} />;
            })}
          </div>
        </div>
      </div>
    </body>
  );
}

export default AllProjectsPage;