import { useState, useEffect} from "react";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
  //State, set is function to set project list dummy data
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
    <div className="bg-gray-100 pt-20">

        <div className="pt-20 pl-20 pr-20 mt-20">
          <div className="grid grid-cols-2">
            <div>
              <img className="ml-5 object-scale-down h-80 animate-bounce inline-block" src="/images/Logo3.png" alt="Futureproofme icon" />
            </div>
          
            <div>
              <h1 className="text-3xl font-bold text-indigo-900">Welcome to FutureProofME!</h1>
              <h2 className="text-xl font-bold text-indigo-900 mb-5">Crowdfunding site for your FUTURE 🚀</h2>
              <p className="text-slate-600">FutureProofME is a crowdfunding platform to help you and your peers raise funds for education. FutureProofME can help you overcome financial barriers that may otherwise prevent you from pursuing your desired career. By using FutureProofME, you can create campaigns to raise funds for your educational expenses, including tuition fees, exam certification, textbooks, and other course materials.</p>
            </div>
          </div>
        </div>


      <div>
        <h1 className="pt-5=3 pb-3 ml-10 mr-10 bg-indigo-100 text-3xl font-bold text-center text-indigo-900 rounded-md">Latest Campaigns</h1>
        <div className=" grid grid-cols-3 p-10 gap-10">
  
        {latestProject.map((project, key) => {
        return <ProjectCard key={key} projectData={project} />;
        })}
        </div>
      </div>

    </div>
  );
}

export default HomePage;