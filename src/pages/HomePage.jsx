import { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { responsive } from "../data.js";
// 
//Components
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Slider from "../components/Slider/Slider";

function HomePage() {
  //State
  const [projectList, setProjectList] = useState([]);
  const [project, setProjectData] = useState({ pledges: [] });

  //Effect only run once after first UI rendered if array is empty []
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects`) //grab the url from .env
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      setProjectList(data);
    });
  }, []);

  function compare(a, b) {
    if (a.date_created < b.date_created) {
      return 1;
    }
    if (a.date_created > b.date_created) {
      return -1;
    }
    return 0;
  }

  const latestProject = projectList.sort(compare).slice(0, 3);
  const latestPledges = projectList.sort(compare).slice(0, 4);
  return (
    <div className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/80 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src="/images/hero-image.jpg" alt="/" />
     </div>
    
     <div className='max-w-[1240px] mx-auto text-white relative'>
      <div className='px-4 py-2 md:py-6 lg:py-12'>
        
        <h3 className='text-5xl font-bold py-6 pt-48 text-center'>Welcome to FutureProofME!</h3>
        <h2 className='text-lg text-slate-100 text-center font-bold sm:text-2xl'>Crowdfunding site for your future 🚀</h2>
        <p className='py-3 ml-10 mr-10 text-sm text-slate-100 text-center sm:text-xl'>FutureProofME is a crowdfunding platform to help you and your peers raise funds for education. FutureProofME can help you overcome financial barriers that may otherwise prevent you from pursuing your desired career. By using FutureProofME, you can create campaigns to raise funds for your educational expenses, including tuition fees, exam certification, textbooks, course materials and more. </p>
        <p className='ml-10 mr-10 text-white-100 text-center'><button type="button" className=" py-4 text-sm font-bold p-8 m-8 
        rounded-lg text-slate-100 text-center bg-gradient-to-r
        from-green-400 to-blue-500 hover:from-indigo-500 hover:to-yellow-500 sm:text-lg "><Link to="/registration">
        Get started today ➔</Link></button></p>
      </div>
    
      <div className="bg-gradient-to-r from-indigo-300 from-10% via-sky-200 via-30% to-indigo-200 to-90% rounded-lg shadow-2xl">
        <h1 className="text-center text-3xl font-bold pt-6 text-indigo-900">Latest campaigns</h1>
      
        <div className="grid lg:grid-cols-3 md:grid-cols-2 p-10 gap-7 flex-col">
        {latestProject.map((project, key) => {
          return <ProjectCard key={key} projectData={project} />;
        })}
     
        
        <div></div>
        <div></div>
        <div><p className= 'py-2 text-md font-bold text-indigo-900 text-right sm:text-xl'>See more campaigns <Link to="/allprojects"> ➔</Link></p></div>
        </div>
      </div>

      <div>
      <h1 className="text-center lg:text-3xl text-2xl
font-bold pt-10 text-indigo-900">Thousand of users share the love!</h1>
        <Slider />
      </div>

      <div className="bg-gradient-to-r from-indigo-900 from-10% via-sky-600 via-30% to-indigo-900 to-90% rounded-lg shadow-2xl mt-12 h-[120px] -m-16">
      <div className="flex lg:justify-between ml-10 mr-5">
      <h1 className="text-left lg:text-xl text-sm lg:font-bold font-semibold text-slate-100 lg:pt-12 p-8">Register today & start your very own futureproofME campaign.</h1>
      <p className='ml-10 mr-10 pt-6 text-white-100 text-left'><button type="button" 
      className=" py-2 text-sm font-bold p-8 m-4 rounded-full text-slate-100 text-center bg-pink-500 hover:bg-indigo-400 sm:text-lg "><Link to="/registration">
      Get Started!</Link></button></p>
      </div>
      </div>

      
      
      

      <div>
      </div>
  
  
  
  
  

  

 </div>
 
      </div>
      


  

    
  
    
  );
}

export default HomePage;