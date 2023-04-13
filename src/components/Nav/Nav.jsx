import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

function Nav(props) {
  const [navbar, setNavbar] = useState(false);
  const navRef = useRef();
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = props;

  const handleClick = () => {
    window.localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
    navRef.current.classList.toggle("responsive_nav");
  };

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  const xIcon = <FontAwesomeIcon icon={faX} />;

    return (
        <nav className="flex justify-between bg-blue-100 p-2 backdrop-blur-md w-full
        fixed top-0 left-0 right 0 z-10 sm:flex flex-wrap">
        
            <div className="flex items-center">
                <Link to="/home">
                    <a className="cursor-pointer"> 
                    <img className="ml-5 object-contain h-30 w-60" src="/images/Logo4.png" alt="Futureproofme logo"></img>
                    </a>
                </Link>

            </div>

            <div className="items-center font-bold text-indigo-900 text-lg hidden space-x-10 lg:flex">
                    <Link to="/home" onClick={showNavBar} className="hover:text-indigo-400">Home</Link>
                    <Link to="/allprojects" onClick={showNavBar} className="hover:text-indigo-400">Campaigns</Link>    
                    <Link to="/postproject" onClick={showNavBar} className="hover:text-indigo-400">Create campaigns</Link>
                    <Link to="/contact" onClick={showNavBar} className="hover:text-indigo-400">Contact us</Link>
            </div>

            <div className="mr-10 items-center hidden space-x-6 lg:flex">
                <button class="bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-1 px-3 rounded">
                {!loggedIn && <Link to="/registration" onClick={showNavBar}>Sign Up</Link>} 
                </button>

                <button class="bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-1 px-3 rounded">
                {!loggedIn && <Link to="/login" onClick={showNavBar}>Login</Link>}
                {loggedIn && <button onClick={showNavBar}>Sign Out</button>}
                </button>
            </div> 



        </nav>
    );
}

export default Nav;