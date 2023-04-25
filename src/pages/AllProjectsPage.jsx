import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


import ProjectCard from "../components/ProjectCard/ProjectCard";
import Slider from "../components/Slider/Slider";


function AllProjectsPage() {
  // State
  const [projectList, setProjectList] = useState([]);
  const [SortedProjectList, setSortedProjectList] = useState([]);


  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects/`) //grab the url from env
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);

  //Sort by date created
  // function compare(a, b) {
    // if (a.date_created < b.date_created) {
      // return 1;
    // }
    // if (a.date_created > b.date_created) {
      // return -1;
    // }
    // return 0;
  // }
  // So projects will appear in date order
  // const latestProject = projectList.sort(compare);

  // new - old
  const orderProjectList = () => {
    const orderedList = [...projectList].sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
    setSortedProjectList(orderedList);
  };

  // old - new
  const reorderProjectList = () => {
    const orderedList = [...projectList].sort((a, b) => new Date(a.date_created) - new Date(b.date_created));
    setSortedProjectList(orderedList);
  };

  // a - z
  const sortProjectList = () => {
    const sortedList = [...projectList].sort((a, b) => a.title.localeCompare(b.title));
    setSortedProjectList(sortedList);
  };

  // z - a
  const resortProjectList = () => {
    const sortedList = [...projectList].sort((a, b) => b.title.localeCompare(a.title));
    setSortedProjectList(sortedList);
  };

  //rendering alphabets first
  useEffect(() => {
    resortProjectList();
  }, [projectList]);

  //sort button function
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  return (
    <div className='w-full mt-24'>
      <div className='w-full h-[600px] bg-slate-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src="/images/hero-image-4.jpg" alt="/" />
      </div>
  
    <div className='max-w-[1240px] mx-auto text-white relative'>
      <div className='px-6 py-2 md:py-6 lg:py-12'>
          <div className="rounded-lg m-2">
          <h2 className="lg:text-4xl md:text-3xl text-2xl text-center font-bold pt-10 mt-10">Support your fellow FutureProofME Campaigners</h2>
          <p className="text-slate-100 p-2 ml-10 mr-10 lg:text-lg md:text-md text-sm text-center">FutureProofME is a crowdfunding platform to help you and your peers raise funds for education. FutureProofME can help you overcome financial barriers that may otherwise prevent you from pursuing your desired career. By using FutureProofME, you can create campaigns to raise funds for your educational expenses, including tuition fees, exam certification, textbooks, and other course materials.</p>

          <p className='text-white-100 font-bold lg:text-lg md:text-md text-sm text-center'><button type="button" 
            className="text-sm font-bold pl-2 pr-2 m-1 lg:p-3 lg:m-3 rounded-lg text-slate-100 text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-indigo-500 hover:to-yellow-500 
            sm:text-lg "><Link to="/registration">
            SIGN UP NOW</Link></button>to create your campaign or to donate. Now it's time to future proof yourself and your peers! 🚀</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 pb-16 pl-12 pr-12 gap-7 flex-col">
          <div className="shadow-xl bg-slate-200 p-8 m-4 rounded-xl">
            <h2 className="text-indigo-600 lg:text-4xl md:text-3xl text-2xl text-center font-bold">Over $100K</h2>
            <p className="lg:text-lg md:text-md text-sm text-center font-bold text-slate-500">raised toward upskilling!</p>
          </div>

          <div className="shadow-xl bg-slate-200 p-8 m-4 rounded-xl">
            <h2 className="text-indigo-600 lg:text-4xl md:text-3xl text-2xl text-center font-bold">Over 1K Users</h2>
            <p className="lg:text-lg md:text-md text-sm text-center font-bold text-slate-500">reach their career goal!</p>
          </div>

          <div className="shadow-xl bg-slate-200 p-8 m-4 rounded-xl">
            <h2 className="text-indigo-600 lg:text-4xl md:text-3xl text-2xl text-center font-bold">Faster Together</h2>
            <p className="lg:text-lg md:text-md text-sm text-center font-bold text-slate-500">collectively reach goals faster!</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-900 from-10% via-sky-400 via-30% to-slate-900 to-90% rounded-lg shadow-2xl mb-10">
          <h1 className="pt-5 pb-5 text-3xl font-bold text-center text-slate-100 tracking-widest">Current Campaigns</h1></div>

        <Menu as="div" className="relative inline-block pb-10 pl-10">
          <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-5 rounded-md bg-white px-3 py-3 text-md font-semibold text-gray-900 
          shadow-sm ring-2 ring-inset ring-indigo-400 hover:bg-indigo-200">
          Sort options
          <ChevronDownIcon className="mr-1 h-5 w-5 text-indigo-800" aria-hidden="true" />
          </Menu.Button>
         </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
              <button onClick={sortProjectList} className={classNames(
                active ? 'bg-gray-100 text-indigo-700' : 'text-indigo-500',
                'block px-2 py-2 text-sm font-bold'
              )}
              >
              a ➔ z
              </button>
              )}
              </Menu.Item>

              <Menu.Item>
              {({ active }) => (
              <button onClick={resortProjectList} className={classNames(
                active ? 'bg-gray-100 text-indigo-700' : 'text-indigo-500',
                'block px-2 py-2 text-sm font-bold'
              )}
              >
              z ➔ a
              </button>
              )}
              </Menu.Item>

              <Menu.Item>
              {({ active }) => (
              <button onClick={orderProjectList} className={classNames(
                active ? 'bg-gray-100 text-indigo-700' : 'text-indigo-500',
                'block px-2 py-2 text-sm font-bold'
              )}
              >
              new ➔ old
              </button>
              )}
              </Menu.Item>
             
              <Menu.Item>
              {({ active }) => (
              <button onClick={reorderProjectList} className={classNames(
                active ? 'bg-gray-100 text-indigo-700' : 'text-indigo-500',
                'block px-2 py-2 text-sm font-bold'
              )}
              >
              old ➔ new
              </button>
              )}
              </Menu.Item>

              </div>
        </Menu.Items>
      </Transition>
    </Menu>
  

        <div className="">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 p-10 gap-8 flex-col">
            {SortedProjectList.map((project, key) => {
              return <ProjectCard key={key} projectData={project} />;
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-900 from-10% via-sky-600 via-30% to-indigo-900 to-90% rounded-lg shadow-2xl mt-12 h-[120px] -m-16">
<div className="flex lg:justify-between ml-10 mr-5">
<h1 className="text-left lg:text-xl text-sm lg:font-bold font-semibold text-slate-100 lg:pt-12 p-8">Register today & start your very own futureproofME campaign.</h1>
<p className='ml-10 mr-10 pt-6 text-white-100 text-left'><button type="button" 
className=" py-2 text-sm font-bold p-6 m-4 rounded-full text-slate-100 text-center bg-pink-500 hover:bg-indigo-400 sm:text-lg "><Link to="/registration">
Get Started!</Link></button></p>
</div>
</div>

</div>
</div>


   
  );
}

export default AllProjectsPage;