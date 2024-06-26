import React from 'react'
import me from '../../assets/Hero/me.jpeg'
import hi from '../../assets/Hero/1f44b.gif'
import Linkedin from '../../assets/Hero/linkedin.png'
import Resume from '../../assets/Hero/check.png'
import { Element } from 'react-scroll';
import TypingAnimation from '../typingAnimation/TypingAnimation';


const HeroSection = () => {
  

  return (
    <Element name='home' className='p-4 pt-28 xl:pt-44 pb-10'>
      <div className="z-10 md:grid md:grid-cols-12 gap-2">
        <div className='md:col-span-12 '>
          <div className=' block xl:hidden'>
            <div className='flex justify-center xl:justify-end items-center pb-10 xl:pb-0'>
              <img src={me} className='z-10 h-auto w-4/5 sm:w-3/5 lg:w-2/4 rounded-full ring-4 ring-red-500 shadow-lg' alt='me'/>
            </div>
          </div>
        </div>
        <div className='xl:col-span-6 md:col-span-12 flex justify-center items-center'>
          <div className='text-center xl:text-start'>
            <h1 className='text-3xl sm:text-5xl font-bold flex items-center justify-center xl:justify-start'><span className='mr-1'><img src={hi} width={40} alt='hi'/></span>Hi, I'm</h1>
            <h1 className='text-3xl sm:text-5xl font-bold mt-4'>Tanvir Mahmud</h1>
            <h3 className='text-xl sm:text-3xl font-semibold my-4'>I'm a <span className='text-red-500'><TypingAnimation/></span></h3>
            <h5 className='text-md sm:text-lg font-medium'>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</h5>
            <div className='mt-8 flex items-center justify-center xl:justify-start'>
              <a href='https://drive.google.com/file/d/1nwwn-Sp8axNLjqrYBWBOy7hRWh-DsCZp/view' target='_blank' type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg z-10 text-sm px-5 py-2.5 text-center mr-2">
                <span className="relative transition-all ease-in duration-75 text-white rounded-md group-hover:bg-opacity-0 flex items-center">
                      <img src={Resume} width={22} alt='linkedin'/>
                      <div className='ml-2'>Resume</div>
                </span>
              </a>
              <a href='https://www.linkedin.com/in/tanvirmahmud61/' target='_blank' type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg z-10 text-sm px-5 py-2.5 text-center mr-2">
                <span className="relative transition-all ease-in duration-75 text-white rounded-md group-hover:bg-opacity-0 flex items-center">
                      <img src={Linkedin} width={20} alt='linkedin'/>
                      <div className='ml-2'>Profile</div>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className='xl:col-span-6 md:col-span-12 z-10'>
          <div className='hidden xl:block'>
            <div className='flex justify-end items-center'>
              <img src={me} width={450} className='h-auto rounded-full ring-4 ring-red-500 shadow-lg' alt='me'/>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default HeroSection