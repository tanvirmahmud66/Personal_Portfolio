import React from 'react'
import project_pic from '../../assets/Project/Porject.png'

const Projects = () => {
  return (
    <div className='m-4 mt-32 z-10'>
          <h3 className='text-3xl text-center text-black font-semibold'>Projects</h3>
          <div className='flex justify-evenly items-center'>

            {/* card */}
            <a href='https://csbox.netlify.app' target='_blank' class="mt-12 my-4 z-10 cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img class="rounded-t-lg" src={project_pic} alt="project_pic" />
                </div>
                <div className='px-5 pt-2 '>
                  <div className='flex justify-center items-center'>
                    <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Javascript</span>
                    <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">React</span>
                    <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Bootstrap</span>
                  </div>
                  <div className='my-2 flex justify-center items-center'>
                    <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Netlify</span>
                    <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Python</span>
                    <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Django</span>
                    <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Rest-Framework</span>
                  </div>
                  <div className='flex justify-center items-center'>
                    <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Restful APIs</span>
                    <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Pythonanywhere</span>
                  </div>
                </div>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">csbox - Virtual Learning Platform</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    
                </div>
            </a>
          </div>

    </div>
  )
}

export default Projects




