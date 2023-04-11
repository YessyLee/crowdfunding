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
    <div className='w-full mt-24'>
      <div className='w-full h-[600px] bg-slate-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src="/images/hero-image-4.jpg" alt="/" />
      </div>
  
    <div className='max-w-[1240px] mx-auto text-white relative'>
      <div className='px-6 py-2 md:py-6 lg:py-12'>
          <div className="rounded-lg m-2">
          <h2 className="text-4xl text-center font-bold pt-10 mt-10">Support your fellow FutureProofME Campaigners</h2>
          <p className="text-slate-100 p-5 ml-10 mr-10 text-lg text-center">FutureProofME is a crowdfunding platform to help you and your peers raise funds for education. FutureProofME can help you overcome financial barriers that may otherwise prevent you from pursuing your desired career. By using FutureProofME, you can create campaigns to raise funds for your educational expenses, including tuition fees, exam certification, textbooks, and other course materials.</p>
        
          <p className="font-bold text-center text-xl text-slate-100 pb-5"><Link className="text-yellow-400" to="/registration">SIGN UP NOW</Link> to create your campaign or to donate. Now it's time to future proof yourself and your peers! 🚀</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-300 from-10% via-sky-200 via-30% to-indigo-200 to-90% rounded-lg shadow-2xl mb-10">
          <h1 className="pt-3 pb-3 text-3xl font-bold text-center text-indigo-900">Current Campaigns</h1>
        </div>

        <div className="">
          <div className="grid grid-cols-3 pl-10 pr-10 gap-8">
            {latestProject.map((project, key) => {
              return <ProjectCard key={key} projectData={project} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProjectsPage;