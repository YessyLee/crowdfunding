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

  return (
    <div className="pt-10">
    <div className="p-10 mt-20">
      <h1 className="text-2xl font-bold text-indigo-800">FutureProofME: Crowdfunding for your Future</h1><span>
      </span>
      <p className="text-slate-700">FutureProofME is a crowdfunding platform to help you raise money for education and can help you overcome financial barriers that may otherwise prevent you from pursuing your desired career. By using FutureProofME, you can create campaigns to raise funds for your educational expenses, including tuition fees, textbooks, and other course materials.</p>
      <div><h1 className="text-2xl font-bold text-center text-indigo-800">Latest Campaigns</h1></div>
    </div>

    <div id="project-list" className="p-10">
      {projectList.map((project, key) => {
        return <ProjectCard key={key} projectData={project} />;
      })}
    </div>
  </div>
  );
}

export default HomePage;