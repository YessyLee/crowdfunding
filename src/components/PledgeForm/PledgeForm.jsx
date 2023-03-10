import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PledgeForm(props) {
  const { project } = props;

  const [pledges, setPledges] = useState({
    // from JSON Raw Body in Deployed (default values)
    // this is what you return at the bottom - your list might look different to mine. If so, don't worry!
    amount: null,
    comment: "",
    anonymous: false,
  });

  // enables redirect
  const navigate = useNavigate();

  // accesses project ID so the pledge can be connected to it
  const { id } = useParams();

  // copies the original data, replaces the old data for each id/value pair to what is input in the form (changes state). this will be submitted to API below
  const handleChange = (event) => {
    const { id, value } = event.target;
    setPledges((prevPledges) => ({
      ...prevPledges,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // get auth token from local storage
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
      //REDIRECT TO LOGIN PAGE
      navigate(`/login`);
    }
  };

  return (
    <body className="flex">
      <form onSubmit={handleSubmit}>
        <h3 className="font-bold text-indigo-800 text-xl mt-5 mb-5">Make a Donation Now!</h3>

        <div className="flex mb-5">
          <div className="w-1/3 flex items-start">
            <label className ="block text-indigo-900 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="amount">Amount:</label>
          </div>
            
          <div className=""> 
            <input className ="bg-indigo-100 appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="number"
            min="1"
            id="amount"
            placeholder="Your donation amount"
            onChange={handleChange}
          />
          </div>
        </div>
        
      <div className="flex mb-5">
        <div className="w-1/3 flex items-start">
          <label className ="block text-indigo-900 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="comment">Comment:</label>
        </div>
          
        <div className="w-2/3 flex items-start"> 
          <input className ="bg-indigo-100 appearance-none border-2 border-gray-200 rounded w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="comment"
            placeholder="Your message..."
            maxlength="120"
            onChange={handleChange}
          />
          </div>
        </div>

        <div className="flex mb-5">
          <div className="w-1/3 flex items-start">
            <label className ="block text-indigo-900 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="anonymous">Anonymous:</label>
          </div>

          <div className="w-2/3 flex items-start">
            <input className="pl-10 ml-1 mt-2"
              type="checkbox"
              id="anonymous"
              onChange={handleChange}
            />
          </div>
          </div>
        
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button className="shadow bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 rounded" type="submit" onClick={handleSubmit}>
          Donate
          </button>
        </div>
      </div>
    </form>
  </body>
  );
}

export default PledgeForm;