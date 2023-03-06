import React, { useState } from "react";

// Imports
import { useNavigate, useOutletContext } from "react-router-dom";

// Styles - import css

function ProjectForm(projectData) {
  // State
  const authToken = window.localStorage.getItem("token")
  // const [loggedIn] = useOutletContext();
  const [project, postProject] = useState(
    projectData.map
  );

  // // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    postProject((prevProjectData) => ({
      ...prevProjectData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    // console.log("handleSubmit", project, authToken)
    
    // Is user logged in and have they put something in all fields?
    if (authToken && project.title && project.description && project.goal && project.image && project.is_open && project.date_created && project.total) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}projects/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Token ${authToken}`,
            },
            body: JSON.stringify({
              title: project.title, 
              description: project.description,
              goal: parseInt(project.goal),
              image: project.image,
              is_open: project.is_open === "on",
              date_created: new Date(project.date_created).toISOString(),
              total: project.total,
            }),
          }
        );
        if (!response.ok) {
          throw new Error(await response.text());
        }
        navigate(-1);
      } catch (err) {
        console.error(err);
        alert(`Error: ${err.message}`);
      }
    } else {
// redirect to login page
      navigate(`/login`);
}
};
        // const data = await response.json();
        // console.log(data)
        // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
        // navigate(`/project/${data.id}`);
      // } catch (err) {
        // console.log(err);
      // }
    // }
  // };


  const formFields = [
    {
       id: "title",
       label: "Title: ",
       placeholder: "Enter Title",
       type: "text",
    },
    {
        id: "description",
        label: "Description: ",
        placeholder: "Enter Description",
        type: "text",
    },
    {
        id: "goal",
        label: "Goal: ",
        placeholder: "Enter Goal",
        type: "number",
    },
    {
        id: "image",
        label: "Image: ",
        placeholder: "Enter Image URL",
        type: "url",
    },
        {
       id: "is_open",
       label: "Open: ",
       placeholder: "Enter if Project Open",
       type: "checkbox",
    },
    {
        id: "date_created",
        label: "Date Created: ",
        placeholder: "Select Date",
        type: "date",
    },
    {
        id: "total",
        label: "Donation received: ",
        placeholder: "Enter zero",
        type: "number",
  },
]

    return ( 
        <form>
            {formFields.map((field, key) => {
                return (
                <div key={`${key}-${field.id}`}>
                    <label htmlFor={field.id}>
                        {field.label}
                    </label>
                    <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                    />
                </div>
                )
            })}
            <button className="post-project-btn" type="submit" onClick={handleSubmit}>
            Post Request
            </button>
        </form>
    )
}

export default ProjectForm;