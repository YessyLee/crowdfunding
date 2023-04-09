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

import React from 'react'

import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-16 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 
py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>SITE MAP</h6>
                <ul>
                    <li className='py-1'>Home</li>
                    <li className='py-1'>See all campaigns</li>
                    <li className='py-1'>Sign up</li>
                    <li className='py-1'>Login</li>
                    <li className='py-1'>Contact us</li>
                </ul>
            </div>
            <div>
                {/* <h6 className='font-bold uppercase pt-2'>Support</h6> */}
                {/* <ul> */}
                    {/* <li className='py-1'>Pricing</li> */}
                    {/* <li className='py-1'>Documentation</li> */}
                    {/* <li className='py-1'>Guides</li> */}
                    {/* <li className='py-1'>API Status</li> */}
                {/* </ul> */}
            </div>
            <div>
                {/* <h6 className='font-bold uppercase pt-2'>Company</h6> */}
                {/* <ul> */}
                    {/* <li className='py-1'>About</li> */}
                    {/* <li className='py-1'>Blog</li> */}
                    {/* <li className='py-1'>Jobs</li> */}
                    {/* <li className='py-1'>Press</li> */}
                    {/* <li className='py-1'>Partners</li> */}
                {/* </ul> */}
            </div>
            <div>
                {/* <h6 className='font-bold uppercase pt-2'>Legal</h6> */}
                {/* <ul> */}
                    {/* <li className='py-1'>Claims</li> */}
                    {/* <li className='py-1'>Privacy</li> */}
                    {/* <li className='py-1'>Terms</li> */}
                    {/* <li className='py-1'>Policies</li> */}
                    {/* <li className='py-1'>Conditions</li> */}
                {/* </ul> */}
            </div>
            <div className='col-span-2 pt-4 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-5'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter your email..'/>
                    <button className='text-gray-300 py-2 mb-5'>subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-2 mx-auto justify-between sm:flex-row 
text-center text-gray-400'>
        <p className='py-4'>2023 Yessy Lee | She Codes Plus Australia. All rights reserved</p>
        <div className='flex justify-between sm:w-[200px] pt-2 text-2xl'>
            <FaLinkedin />
            <FaInstagram />
            <FaGithub />
        </div>
        </div>
    </div>
  )
}

export default Footer