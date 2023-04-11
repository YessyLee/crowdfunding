// function Footer () {
    // return (
        // <div className="text-slate-50 text-center text-sm bg-indigo-900 pt-3 pb-3">
            {/* <div> */}
            {/* <p>&copy; Yessy Lee | She Codes Plus 2023</p> */}
            {/* </div> */}
        {/* </div> */}
    // );
// }
// 
// export default Footer;
// 
import { Link } from "react-router-dom";
import React from 'react'

import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-10 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 
py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>SITE MAP</h6>
                <ul>
                    <li className='py-1'><Link to="/home">Home</Link></li>
                    <li className='py-1'><Link to="/allprojects">All campaigns</Link></li>
                    <li className='py-1'><Link to="/registration">Sign up</Link></li>
                    <li className='py-1'><Link to="/login">Login</Link></li>
                    <li className='py-1'><Link to="/contact">Contact us</Link></li>
                </ul>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className='col-span-2 pt-4 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-5'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row bg-slate-900'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4 text-sm text-gray-600' type="email" placeholder='Enter your email..'/>
                    <button className='text-gray-300 py-2 mb-5  hover:bg-indigo-400'>subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-2 mx-auto justify-between sm:flex-row text-center text-gray-400'>
        <p className='py-4'>2023 Yessy Lee | She Codes Plus Australia. All rights reserved</p>
        <div className='flex justify-between sm:w-[200px] pt-2 text-2xl'>
          
            <a href="https://www.linkedin.com/in/yessy-rayner-perth/"> <FaLinkedin /></a>
            <a href="https://github.com/YessyLee"><FaGithub /></a>
            <FaInstagram />
        </div>
        </div>
    </div>
  )
}

export default Footer