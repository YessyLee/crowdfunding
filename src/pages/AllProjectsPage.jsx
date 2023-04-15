import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProjectCard from "../components/ProjectCard/ProjectCard";
import Slider from "../components/Slider/Slider";


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
          <p className="text-slate-100 p-2 ml-10 mr-10 text-lg text-center">FutureProofME is a crowdfunding platform to help you and your peers raise funds for education. FutureProofME can help you overcome financial barriers that may otherwise prevent you from pursuing your desired career. By using FutureProofME, you can create campaigns to raise funds for your educational expenses, including tuition fees, exam certification, textbooks, and other course materials.</p>

          <p className='text-white-100 font-bold text-lg text-center'><button type="button" 
            className="text-sm font-bold p-3 m-3 rounded-lg text-slate-100 text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-indigo-500 hover:to-yellow-500 
            sm:text-lg "><Link to="/registration">
            SIGN UP NOW</Link></button>to create your campaign or to donate. Now it's time to future proof yourself and your peers! 🚀</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 pb-16 pl-12 pr-12 gap-7 flex-col">
          <div className="shadow-xl bg-slate-100 p-8 m-4 rounded-xl">
            <h2 className="text-indigo-600 text-4xl text-center font-bold">Over $100K</h2>
            <p className="text-lg text-center font-bold text-slate-500">raised toward upskilling!</p>
          </div>

          <div className="shadow-xl bg-slate-100 p-8 m-4 rounded-xl">
            <h2 className="text-indigo-600 text-4xl text-center font-bold">Over 1K Users</h2>
            <p className="text-lg text-center font-bold text-slate-500">reach their career goal!</p>
          </div>

          <div className="shadow-xl bg-slate-100 p-8 m-4 rounded-xl">
            <h2 className="text-indigo-600 text-4xl text-center font-bold">Faster Together</h2>
            <p className="text-lg text-center font-bold text-slate-500">collectively reach goals faster!</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-900 from-10% via-sky-400 via-30% to-indigo-900 to-90% rounded-lg shadow-2xl mb-10">
          <h1 className="pt-5 pb-5 text-3xl font-bold text-center text-slate-100 tracking-widest">Current Campaigns</h1>
        </div>

        <div className="">
          <div className="grid grid-cols-3 pl-10 pr-10 gap-8">
            {latestProject.map((project, key) => {
              return <ProjectCard key={key} projectData={project} />;
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 from-10% via-sky-600 
via-30% to-indigo-900 to-90% rounded-lg shadow-2xl mt-10">
<div className="flex justify-between">
<h1 className="text-left text-xl font-bold text-slate-100 p-6">Register 
today & start your very own futureproofME campaign.</h1>
<p className='ml-10 mr-10 text-white-100 text-left'><button type="button" 
className=" py-2 text-sm font-bold p-4 m-4 rounded-full text-slate-100 
text-center bg-pink-500 hover:bg-indigo-400 sm:text-lg "><Link to="/
registration">
Get Started!</Link></button></p>
</div>

</div>
      </div>

    </div>
  );
}

export default AllProjectsPage;