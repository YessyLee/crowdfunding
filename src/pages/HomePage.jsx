import { useState, useEffect} from "react";

//Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
  //State
  const [projectList, setProjectList] = useState([]);

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
  return (
    <div className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src="/images/hero-image.jpg" alt="/" />
     </div>
    
     <div className='max-w-[1240px] mx-auto text-white relative'>
      <div className='px-4 py-12'>
        
        <h3 className='text-5xl font-bold py-6 pt-48 text-center'>Welcome to FutureProofME!</h3>
        <h2 className='text-lg text-slate-100 text-center font-bold sm:text-2xl'>Crowdfunding site for your future 🚀</h2>
        <p className='py-4 text-sm m-10 mb-5 text-slate-100 text-center sm:text-xl'>FutureProofME is a crowdfunding platform to help you and your peers raise funds for education. FutureProofME can help you overcome financial barriers that may otherwise prevent you from pursuing your desired career. By using FutureProofME, you can create campaigns to raise funds for your educational expenses, including tuition fees, exam certification, textbooks, and other course materials.</p>
      </div>

    
      <div className="bg-gradient-to-r from-indigo-300 from-10% via-sky-200 via-30% to-indigo-200 to-90% rounded-lg m-5">
      <h1 className="text-center text-3xl font-bold pt-5 text-indigo-900">Latest campaigns</h1>
      
        <div className="grid grid-cols-3 p-10 gap-7 sm: flex-col">
        {latestProject.map((project, key) => {
          return <ProjectCard key={key} projectData={project} />;
        })}
        </div>
      </div>
    </div>
    </div>
  
    
  );
}

export default HomePage;