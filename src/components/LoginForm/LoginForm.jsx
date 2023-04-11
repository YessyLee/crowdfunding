import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import "../FormStyles.css";

function LoginForm() {
    const [, setLoggedIn] = useOutletContext();

    // State
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    //Hooks
    const navigate = useNavigate();

    // Actions
    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    }

    const postData = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}api-token-auth/`,
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            }
        );
        return response.json();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            const { token } = await postData();
            window.localStorage.setItem("token", token);
            setLoggedIn(true);
            navigate("/home");
        }
    };
    
    return (
        <body className="flex min-h-screen justify-center items-center">
        <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
            <h1 className="text-indigo-900 text-3xl text-center font-bold pb-3 pt-10">Login Page</h1>
            <h2 className="text-indigo-400 text-xl text-center font-bold pb-5">Login to donate and to create your very own campaign!</h2>
            
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

            <div className="md:flex md:items-center">   
                <div>
                <button className="shadow bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold px-10 rounded-full" type="submit">
                login
                </button>  
                </div>             
            </div>

            
            <h2 className="text-indigo-800 text-md text-center mb-10">Don't have an account?<Link to="/registration" className="text-indigo-800 text-lg text-center font-bold pl-2">Sign up here!</Link></h2>
            
        </form>
        </div>
    </body>
    );
}

export default LoginForm;


{/* <form onSubmit={handleSubmit}> */}
    {/* <h1 className="text-indigo-900 text-3xl text-center font-bold pb-3">Login Page</h1> */}
    {/* <h2 className="text-indigo-400 text-xl text-center font-bold pb-5">Login to donate & to create your campaign!</h2> */}
{/*      */}
    {/* <div className="flex items-center mb-6">   */}
        {/* <div className="md:w-1/3"> */}
            {/* <label className ="block text-indigo-900 font-bold md:text-right mb-1 md:mb-0 pr-4" */}
            // htmlFor="username">Username:</label>
        {/* </div> */}
        {/* <div className="md:w-2/3"> */}
            {/* <input className ="bg-indigo-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  */}
// focus:border-purple-500"
            // type="text"
            // id="username"
            // onChange={handleChange}
            // placeholder="Enter username"
            // />
        {/* </div> */}
    {/* </div> */}
{/*      */}
    {/* <div className="flex items-center mb-6"> */}
        {/* <div className="md:w-1/3"> */}
            {/* <label className="block text-indigo-900 font-bold md:text-right mb-1 md:mb-0 pr-4" */}
            // htmlFor="password">Password:</label>
        {/* </div> */}
        {/* <div className="md:w-2/3"> */}
            {/* <input className ="bg-indigo-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  */}
// focus:border-purple-500"
            // type="password"
            // id="password"
            // onChange={handleChange}
            // placeholder="Password"
        // />
        {/* </div> */}
    {/* </div>      */}
{/*      */}
    {/* <div className="md:flex md:items-center"> */}
        {/* <div className="md:w-1/3"></div> */}
        {/* <div className="md:w-2/3"> */}
            {/* <button className="shadow bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 rounded"  */}
            // type="submit">
            {/* Login */}
            {/* </button>   */}
        {/* </div>              */}
    {/* </div> */}