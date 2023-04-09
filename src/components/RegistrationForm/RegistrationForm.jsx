import { useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import "../FormStyles.css";

function RegistrationForm() {
  const authToken = window.localStorage.getItem("token");
  const [users, setUsers] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "",
    bio: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUsers((prevUsers) => ({
      ...prevUsers,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!authToken) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}users/`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: users.username, 
            password: users.password,
            email: users.email,
            avatar: users.avatar,
            bio: users.bio,}),
        });
        navigate(`/home`);
      } catch (err) {
        console.error(err);
      }
    } else {
      navigate(`/login`);
    }
  };

  return (
    <body className="flex min-h-screen justify-center items-center">
      <form className="pt-20 mt-10" onSubmit={handleSubmit}>
        <h1 className="text-indigo-900 text-3xl text-center font-bold pb-3">
        Sign Up</h1>
        <h2 className="text-indigo-400 text-xl text-center font-bold pb-5">
        Register to donate & to create your very own campaign!</h2>

      <div className="flex items-center mb-6">  
        <div className="md:w-1/3">
          <label className ="block text-indigo-900 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="username">Username:</label>
        </div>
    
        <div className="md:w-2/3">
          <input className ="bg-indigo-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          id="username"
          onChange={handleChange}
          placeholder="Enter username"
          />
        </div>
      </div>       
        
    <div className="flex items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-indigo-900 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="password">Password:</label>
      </div>
      
      <div className="md:w-2/3">
        <input className ="bg-indigo-100 appearance-none border-2 
        border-gray-200 rounded w-full py-2 px-4 text-gray-700 
        leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="password"
        id="password"
        onChange={handleChange}
        placeholder="Enter a password"
        />
      </div>
    </div>

    <div className="flex items-center mb-6">
  <div className="md:w-1/3">
    <label className="block text-indigo-900 font-bold md:text-right mb-1 md:mb-0 pr-4" 
htmlFor="email">Email:</label>
  </div>
  
  <div className="md:w-2/3">
    <input className ="bg-indigo-100 appearance-none border-2 
    border-gray-200 rounded w-full py-2 px-4 text-gray-700 
    leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
    type="text"
    id="email"
    onChange={handleChange}
    placeholder="Enter your email"
    />
  </div>
</div>

    <div className="flex items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-indigo-900 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="avatar">Avatar:</label>
      </div>

      <div className="md:w-2/3">
        <input className ="bg-indigo-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="url"
        id="avatar"
        placeholder="Enter your image url"
        onChange={handleChange}
        />
      </div>
    </div>

    <div className="flex items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-indigo-900 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="bio">Bio:</label>
      </div>

      <div className="md:w-2/3">
        <input className ="bg-indigo-100 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="text"
        id="bio"
        placeholder="Tell us about yourself"
        onChange={handleChange}
        />
      </div>
    </div>

    <div className="md:flex md:items-center">
      <div className="md:w-1/3"></div>
      <div className="md:w-2/3">
        <button className="shadow bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 rounded" 
        type="submit">
        Sign up
        </button>  
      </div>             
    </div>
            
    <h2 className="text-indigo-800 text-md text-center mt-5 ml-20 pl-5">
    Already have an account?<Link to="/login" className="text-indigo-800 text-lg text-center font-bold pl-2 pb-5">Login here!</Link></h2>    
            
    </form>
  </body>
  );
}

export default RegistrationForm;