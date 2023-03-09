import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

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
      <form className="mt-10 pt-20" onSubmit={handleSubmit}>
       <h1 className="text-indigo-900 text-3xl text-center font-bold pb-8">
        Create FutureProofME campaign!</h1>

        <div className="flex items-center mb-6">  
          <div className="md:w-1/3">
            <label className ="block text-indigo-900 font-bold md:text-right mb-1 md:mb-0 pr-4" 
            htmlFor="title">Title:</label>
        </div>

        <div className="md:w-2/3">
          <input className ="bg-indigo-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="Enter title"
          type="text"
          id="title"
          onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex items-center mb-6">  
        <div className="md:w-1/3">
          <label className ="block text-indigo-900 font-bold md:text-right mb-1 md:mb-0 pr-4" 
          htmlFor="title">Description:</label>
        </div>

        <div className="md:w-2/3">
          <input className ="bg-indigo-100 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="message"
          id="description"
          placeholder="Enter your campaign description"
          maxlength="200"
          onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex items-center mb-6">  
        <div className="md:w-1/3">
        <label className ="block text-indigo-900 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="goal">Goal:</label> 
        </div>
        
        <div className="md:w-2/3">
          <input className ="bg-indigo-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="Enter your targeted amount here"
          type="number"
          min="10"
          id="goal"
          onChange={handleChange}
        />
      </div>
      </div>
      

      
      <div className="flex items-center mb-6">  
    <div className="md:w-1/3">
        <label className ="block text-indigo-900 font-bold md:text-right 
mb-1 md:mb-0 pr-4"
htmlFor="image">Image:</label></div>
        
        <div className="md:w-2/3">
    <input className ="bg-indigo-100 appearance-none border-2 
border-gray-200 rounded w-full py-2 px-4 text-gray-700 
leading-tight focus:outline-none focus:bg-white 
focus:border-purple-500"
          placeholder="Enter your image url"
          type="url"
          id="image"
          onChange={handleChange}
        />
        </div>
      </div>

      <div className="flex items-center mb-6">  
    <div className="md:w-1/3">
        <label className ="block text-indigo-900 font-bold md:text-right 
mb-1 md:mb-0 pr-4"
        htmlFor="is_open">
          Tick to activate: </label>
          </div>
          
          <div className="md:w-2/3">
          <input className="pl-10 ml-1"
            type="checkbox"
            id="is_open"
            onChange={handleChange}
          />
      </div>
      </div>

     
      <div className="flex items-center mb-6">  
    <div className="md:w-1/3">
        <label className ="block text-indigo-900 font-bold md:text-right 
mb-1 md:mb-0 pr-4" 
htmlFor="date_created">Date Created:</label>
</div>

  <div className="md:w-2/3">
    <input className ="bg-indigo-100 appearance-none border-2 
border-gray-200 rounded w-full py-2 px-4 text-gray-700 
leading-tight focus:outline-none focus:bg-white 
focus:border-purple-500"
  type="date" id="date_created" onChange={handleChange} />
</div>
</div>
    

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button className="shadow bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 rounded"  type="submit" onClick={handleSubmit}>
                Post Campaign
                </button>
              </div>
            </div>
        </form>
      </body>    
    );
}

export default ProjectForm;