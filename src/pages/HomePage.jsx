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
    <div>
      <h1>FutureProofME: Crowdfunding for your future</h1>
      <p>FutureProofME is a crowdfunding platform to help you raise money for education and can help you overcome financial barriers that may otherwise prevent you from pursuing your desired career. By using FutureProofME, you can create campaigns to raise funds for your educational expenses, including tuition fees, textbooks, and other course materials.</p>
      <div id="project-list">
        {projectList.map((project, key) => {
          return <ProjectCard key={key} projectData={project} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;