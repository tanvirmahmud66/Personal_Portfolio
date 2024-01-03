import React from 'react'
import project_pic from '../../assets/Project/Porject.png'
import project_pic2 from '../../assets/Project/project_2.png'
import { Element } from 'react-scroll';


const Projects = () => {


  return (
    <Element name='projects' className='pt-16 sm:pt-24'>
    <div className='m-4  z-10 sm:bg-slate-800 rounded-lg py-10'>
          <h3 className='text-3xl text-center sm:text-white font-semibold'>Projects</h3>
          <div className='flex justify-evenly items-center'>

            {/* card */}
            <a href='https://csbox.netlify.app' target='_blank' className="mt-8 my-4 z-10 w-full h-[480px] cursor-pointer transition-transform transform hover:scale-105 shadow-lg max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
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


            <a href='https://appsmanager.netlify.app' target='_blank' className="mt-8 my-4 z-10 w-full h-[480px] cursor-pointer transition-transform transform hover:scale-105 shadow-lg max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img className="rounded-t-lg" src={project_pic2} alt="project_pic" />
                </div>
                <div className='px-5 pt-2 '>
                  <div className='flex justify-center items-center'>
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">React</span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Tailwind</span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Netlify</span>
                  </div>
                  <div className='my-2 flex justify-center items-center'>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Django</span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Rest-Framework</span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Pythonanywhere</span>
                  </div>
                </div>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Apps Manager - A simple apps manager application</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Task Manager, Weather Application, Quiz Application.</p>
                </div>
            </a>


          </div>

    </div>
    </Element>
  )
}

export default Projects




