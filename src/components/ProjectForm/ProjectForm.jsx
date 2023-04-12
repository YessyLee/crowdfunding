import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../FormStyles.css";


function ProjectForm() {
  const authToken = window.localStorage.getItem("token")
  const [loggedIn] = useOutletContext();
  const [project, setProject] = useState({
    title: "",
    description: "",
    goal: null,
    image: "",
    is_open: false,
    date_created: null,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setProject((prevProject) => ({
      ...prevProject,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loggedIn) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}projects/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${authToken}`,
            },
            body: JSON.stringify(project),
            });

        if (!response.ok) {
          throw new Error(await response.text());
        }

        navigate(-1);
      } catch (err) {
        // console.error(err);
        alert(`Error: ${err.message}`);
      }
    } else {
      navigate(`/login`);
    }
  };

  return (
    <body className="flex min-h-screen justify-center items-center">
      <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <h1 className="text-indigo-900 text-3xl text-center font-bold pb-3 pt-10">
        Create a FutureProofME campaign!</h1>
        <h2 className="text-indigo-400 text-xl text-center font-bold pb-5">To post a campaign you would need to login.</h2>

        <div className="form-item">
          <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              required="required"
            />
          <label htmlFor="title">
              <span>title</span>
          </label>
        </div>

        <div className="form-item">
          <input
              type="message"
              maxlength="500"
              id="description"
              name="description"
              onChange={handleChange}
              required="required"
            />
          <label htmlFor="description">
              <span>description</span>
          </label>
        </div>

        <div className="form-item">
          <input 
            type="number"
            min="10"
            id="goal"
            name="goal"
            onChange={handleChange}
            required="required"
          />
          <label htmlFor="description">
              <span>goal</span>
          </label>
        </div>

        <div className="form-item">
          <input 
            type="url"
            id="image"
            name="image"
            onChange={handleChange}
            required="required"
          />
          <label htmlFor="description">
              <span>image url</span>
          </label>
        </div>

        <div className="form-item">
         <input 
           type="date"
           id="date_created"
           name="date"
           onChange={handleChange}
           required="required"
         />
         <label htmlFor="date_created">
             <span>date created</span>
         </label>
        </div>

        <div className="form-item">
          <input 
            type="checkbox"
            id="is_open"
            name="tick_to_activate"
            onChange={handleChange}
            required="required"
          />
          <label htmlFor="tick_to_activate">
              <span>tick to activate</span>
          </label>
          </div>  
    
        <div className="md:flex md:items-center mb-10">
        <div>
          <button className="shadow bg-indigo-500 hover:bg-indigo-700 
            focus:shadow-outline focus:outline-none text-white font-bold px-10 
            rounded-full" type="submit">post campaign
          </button>  
        </div>             

        </div>
      </form>
      </div>
    </body>    
  );
}

export default ProjectForm;