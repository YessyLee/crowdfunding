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
    <div className="form-wrapper">
    <form onSubmit={handleSubmit}>
      <h1 className="text-indigo-900 text-3xl text-center font-bold pb-3 pt-10">
        Create an Account</h1>
        <h2 className="text-indigo-400 text-xl text-center font-bold pb-5">
        Register to donate & to create your very own campaign!</h2>
    
      <div className="form-item">
        <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            required="required"
          />
        <label htmlFor="username">
            <span>username</span>
        </label>
        
        </div>
      <div className="form-item">
          <input
              type="text"
              id="password"
              name="password"
              onChange={handleChange}
              required="required"
          />
          <label htmlFor="password">
              <span>password</span>
          </label>
      </div>

      <div className="form-item">
        <input
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
        required="required"
      />
      <label htmlFor="email">
        <span>email</span>
      </label>
      </div>

      <div className="form-item">
      <input
        type="url"
        id="avatar"
        name="avatar"
        onChange={handleChange}
        required="required"
       />
      <label htmlFor="avatar">
        <span>avatar url</span>
      </label>
      </div>

      <div className="form-item">
      <input
        type="message"
        maxlength="200"
        id="bio"
        name="bio"
        onChange={handleChange}
        required="required"
     />
     <label htmlFor="bio">
        <span>short bio</span>
      </label>
     </div>
  
    <div className="md:flex md:items-center">
      <div>
        <button className="shadow bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold px-10 rounded-full" type="submit">
        sign up
        </button>  
      </div>             
    </div>
            
    <h2 className="text-indigo-800 text-md text-center mb-10">
    Already have an account?<Link to="/login" className="text-indigo-800 text-lg text-center font-bold pl-2">Login here!</Link></h2>    
            
    </form>
    </div>
  </body>
  );
}

export default RegistrationForm;