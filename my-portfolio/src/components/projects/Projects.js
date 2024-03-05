import React, { useState } from 'react'
import { Element } from 'react-scroll';
import {Link} from 'react-router-dom'
import projectsData from './ProjectData';
import Dot from '../../assets/Project/dot.png'


const Projects = () => {

  // console.log(projectsData)

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projectsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projectsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  return(
    <Element name='projects' className='pt-16 sm:pt-24 '>
  <div className='m-4 bg-slate-800 z-10 rounded-lg'>
    <h3 className='text-3xl p-4 text-center text-white font-semibold'>Projects</h3>
    <div className='h-full w-full m-auto py-5 p-4 relative group'>

        {/* card render */}
        <div className='w-full min-h-[500px] sm:w-1/2 mx-auto rounded-2xl bg-center bg-cover duration-500 bg-white'>
          <Link to={`/project/${projectsData[currentIndex].id}/${projectsData[currentIndex].name}`} className='block'>
            <div className="w-full h-full">
              <img src={projectsData[currentIndex].thumbnail} alt='thumbnail' className='rounded-t-lg w-full' />
              <div className='my-2 text-center'>
                {projectsData[currentIndex].frontend && projectsData[currentIndex].frontend.map((each, index) => (
                  <span key={index} className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">{each}</span>
                ))}
              </div>
              <div className='my-2 text-center'>
                {projectsData[currentIndex].backend && projectsData[currentIndex].backend.map((each, index) => (
                  <span key={index} className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">{each}</span>
                ))}
              </div>
              <div className="py-3 px-5">
                <a href="#">
                  <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{projectsData[currentIndex].project_name}</h5>
                </a>
                <p className="text-center font-normal text-gray-700 dark:text-gray-400">{projectsData[currentIndex].description}</p>
              </div>
            </div>
          </Link>
        </div>
      

      {/* Left Arrow */}
      <div onClick={prevSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] h-full px-4 left-5 text-2xl rounded-lg p-2 bg-black/20 text-white cursor-pointer flex justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
      </div>

      {/* Right Arrow */}
      <div onClick={nextSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] h-full px-4 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer flex justify-center items-center'>
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>

    {/* dot */}
    <div className='flex justify-center py-2'>
      {projectsData.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl cursor-pointer'
        > 
        {slideIndex==currentIndex?
          <img className='m-3 bg-red-500 p-1 rounded-full' src={Dot} width={15} alt="project_pic" />:
          <img className='m-3' src={Dot} width={15} alt="project_pic" />}
        </div>
      ))}
    </div>
  </div>
</Element>

  )
}

export default Projects




