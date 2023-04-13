import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
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
    <div className={navbar ? "nav-bar-wrapper active" : "nav-bar-wrapper"}>
       
    <Link to="/home">
      <a className="cursor-pointer"> 
     <img className="ml-5 object-contain h-30 w-60" src="/images/Logo4.png" alt="Futureproofme logo"></img>
     </a>
    </Link>
    
      <nav ref={navRef}>
        <Link to="/home" onClick={showNavBar}>
          Home
        </Link>
        <Link to="/allprojects" onClick={showNavBar}>
          Campaigns
        </Link>
        <Link to="/postproject" onClick={showNavBar}>
          Create campaign
        </Link>
        <Link to="/contact" onClick={showNavBar}>
          Contact us
        </Link>
      

      

       
        {!loggedIn && (
          <Link to="/login" onClick={showNavBar}>
            Login
          </Link>
        )}
        

        
        {!loggedIn && (
          <Link to="/registration" onClick={showNavBar}>
            Sign up
          </Link>
        )}
        

        {loggedIn && <a onClick={handleClick}>Sign out</a>}
        <button onClick={showNavBar} className="nav-btn nav-close-btn">
          {xIcon}
        </button>
      </nav>
      <button onClick={showNavBar} className="nav-btn">
        {" "}
        <FaBars />
      </button>
    </div>
  );
}

export default Nav;