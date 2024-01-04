import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import projectData from './ProjectData'

const SingleProject = () => {

  const {id} = useParams()
  const project = projectData.find(obj => obj.id===parseInt(id));

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? project.screenShots.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === project.screenShots.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };



  return (
    <div className='mx-4 mt-28 min-h-[625px] flex flex-col md:flex-row justify-between items-start'>
      <div className='md:w-[30%]'>
        <h3 className='text-3xl font-bold'>{project.project_name}</h3>
        <h3 className='mt-4 text-lg font-normal'>{project.description}</h3>
        
        <a href={project.projectLink} target='_blank' className="mt-5 inline-flex items-center z-10 justify-center py-3 px-5 text-base font-medium text-white rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
          <span className="w-full">Live Demo</span>
          <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a> 
  
        <div className='mt-8 md:mt-16'>
          <h3 className='font-bold text-lg mb-1 text-blue-600'>Frontend</h3>
          <div>
            <ul>
              {project.frontend.map((each, index) => (
                <li key={index}>{`-> ${each}`}</li>
              ))}
            </ul>
          </div>
        </div>
  
        <div className='mt-5'>
          <h3 className='font-bold text-lg mb-1 text-green-600'>Backend</h3>
          <div>
            <ul>
              {project.backend.map((each, index) => (
                <li key={index}>{`-> ${each}`}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  
      <div className='md:w-[65%] mt-8 md:mt-0'>
        <div className='h-full w-full border-[2px] overflow-hidden rounded-md relative group'>
          {/* screenshot render */}
          <div>
            <img src={project.screenShots[currentIndex]} alt='screenshots' className='w-full' />
          </div>
          
          {/* Left Arrow */}
          <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <svg onClick={prevSlide} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
          </div>
  
          {/* Right Arrow */}
          <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <svg onClick={nextSlide} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default SingleProject