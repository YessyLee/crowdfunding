import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PledgeForm(props) {
  const { project } = props;

  const [pledges, setPledges] = useState({
    amount: null,
    comment: "",
    anonymous: false,
  });

  //Redirect
  const navigate = useNavigate();

  //Access project id, which connect to pledges
  const { id } = useParams();

  //Copy the original data, replaces the old data for each id/value pair to what is input in the form (changes state). This will be submitted to API below
  const handleChange = (event) => {
    const { id, value } = event.target;
    setPledges((prevPledges) => ({
      ...prevPledges,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Get auth token from local storage, but don't use this method in real life deployment, never store auth token on local storage due to security 
    const authToken = window.localStorage.getItem("token");

    if (authToken) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}pledges/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${authToken}`,
            },
            body: JSON.stringify({ project: project.id, ...pledges }),
          }
        );
        if (!response.ok) {
          throw new Error(await response.text());
        }
        location.reload();
      } catch (err) {
        console.error(err);
        alert(`Error: ${err.message}`);
      }
    } else {
      //Rredirect to login page, need to login before submit a pledge
      navigate(`/login`);
    }
  };

  return (
    <body className="flex">
      <form onSubmit={handleSubmit}>
        <h3 className="font-bold text-indigo-800 text-xl mt-5 mb-5">Make a Donation Now!</h3>

        <div className="form-item">
            <input 
            type="number"
            min="1"
            id="amount"
            onChange={handleChange}
            required="required"
            />
          <label htmlFor="amount">
            <span>amount</span>
          </label>
        </div>
        
        
        <div className="form-item">
         <input
             type="message"
             maxlength="200"
             id="comment"
             name="comment"
             onChange={handleChange}
             required="required"
           />
         <label htmlFor="comment">
             <span>comment</span>
         </label>
        </div>
        
        
        <div className="form-item">
         <input
             type="checkbox"
             id="anonymous"
             name="anonymous"
             onChange={handleChange}
             
           />
         <label htmlFor="description">
             <span>anonymous</span>
         </label>
      </div>
        
      <div className="md:flex md:items-center mb-10">
<div>
  <button className="shadow bg-indigo-500 hover:bg-indigo-700 
    focus:shadow-outline focus:outline-none text-white font-bold px-10 
    rounded-full" type="submit">donate
  </button>  
</div>             
</div>
      
      
      
      
    </form>
  </body>
  );
}

export default PledgeForm;