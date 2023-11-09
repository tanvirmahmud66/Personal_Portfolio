import React from 'react'
import project_pic from '../../assets/Project/Porject.png'
import { forwardRef } from 'react';


const Projects = () => {


  return (
    <div id='projects' className='pt-24'>
    <div className='m-4  z-10'>
          <h3 className='text-3xl text-center text-black font-semibold'>Projects</h3>
          <div className='flex justify-evenly items-center'>

            {/* card */}
            <a href='https://csbox.netlify.app' target='_blank' className="mt-8 my-4 z-10 cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img className="rounded-t-lg" src={project_pic} alt="project_pic" />
                </div>
                <div className='px-5 pt-2 '>
                  <div className='flex justify-center items-center'>
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Javascript</span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">React</span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Bootstrap</span>
                  </div>
                  <div className='my-2 flex justify-center items-center'>
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Netlify</span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Python</span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Django</span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Rest-Framework</span>
                  </div>
                  <div className='flex justify-center items-center'>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Restful APIs</span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Pythonanywhere</span>
                  </div>
                </div>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">csbox - Virtual Learning Platform</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">CSBox is a cutting-edge virtual learning platform revolutionizing online education.</p>
                    
                </div>
            </a>


          </div>

    </div>
    </div>
  )
}

export default Projects




