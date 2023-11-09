import React from 'react'
import me from '../../assets/Hero/me.jpeg'
import hi from '../../assets/Hero/1f44b.gif'
import Linkedin from '../../assets/Hero/linkedin.png'
import { Element } from 'react-scroll';


const HeroSection = () => {
  

  return (
    <Element name='home' className='p-4 pt-44 pb-10'>
      <div className="grid grid-cols-12 gap-2">
        <div className='xl:col-span-6 md:col-span-12 flex justify-center items-center'>
          <div className=''>
            <h1 className='text-5xl font-bold flex items-center'><span className='mr-1'><img src={hi} width={40} alt='hi'/></span>Hi, I'm</h1>
            <h1 className='text-5xl font-bold mt-4'>Tanvir Mahmud</h1>
            <h3 className='text-3xl font-semibold my-4'>I'm a <span className='text-red-500'>Software Engineer</span></h3>
            <h5 className='text-lg font-medium'>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</h5>
            <div className='mt-4 flex items-center'>
              <a href='https://drive.google.com/file/d/1eXUn6CMBJ_UiKUIspTyDAngFhfZDn7LB/view?usp=drive_link' target='_blank' type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg z-10 text-sm px-5 py-2.5 text-center mr-2">Resume</a>
              <a href='https://www.linkedin.com/in/tanvirmahmud61/' target='_blank' className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
                    <img src={Linkedin} width={20} alt='linkedin'/>
                    <div className='ml-2'>Profile</div>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className='xl:col-span-6 md:col-span-12 flex justify-end items-center z-10'>
          <img src={me} width={450} className='h-auto rounded-full ring-4 ring-red-500 shadow-lg' alt='me'/>
        </div>
      </div>
    </Element>
  )
}

export default HeroSection