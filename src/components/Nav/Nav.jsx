import { Link } from "react-router-dom";
import './Nav.css'

function Nav(props) {
    const { loggedIn, setLoggedIn } = props
    const handleClick = () => {
        window.localStorage.removeItem("token")
        setLoggedIn(false)
    }

    return (
        <nav className="flex justify-between bg-indigo-100 p-2 backdrop-blur-md w-full
        fixed top-0 left-0 right 0 z-10">
        
            <div className="flex items-center">
                <a href="" className="cursor-pointer">
                <img className="ml-5 object-contain h-30 w-60" src="/images/Logo3.png" alt="Futureproofme logo"></img>
                </a>
            </div>

            <div className="items-center font-bold text-indigo-900 text-lg hidden space-x-10 lg:flex">
                    <Link to="/home" className="hover:text-indigo-400">HOME</Link>
                    <Link to="/allprojects" className="hover:text-indigo-400">CAMPAIGNS</Link>    
                    <Link to="/postproject" className="hover:text-indigo-400">CREATE CAMPAIGN</Link>
                    <Link to="/contact" className="hover:text-indigo-400">CONTACT US</Link>
            </div>

            <div className="mr-10 items-center hidden space-x-6 lg:flex">
                <button class="bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-1 px-3 rounded">
                {!loggedIn && <Link to="/registration">Sign Up</Link>} 
                </button>

                <button class="bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-1 px-3 rounded">
                {!loggedIn && <Link to="/login">Login</Link>}
                {loggedIn && <button onClick={handleClick}>Sign Out</button>}
                </button>
            </div>
                
    
            
        </nav>
    );
}

export default Nav;