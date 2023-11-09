import React, { useState , useRef } from 'react'
import dj from '../../assets/Skills/django.svg'
import react from '../../assets/Skills/react-2.svg'
import javascript from '../../assets/Skills/logo-javascript.svg'
import jquery from '../../assets/Skills/jquery-4.svg'
import tailwind from '../../assets/Skills/tailwindcss.svg'
import bootstrap from '../../assets/Skills/bootstrap-5-1.svg'
import sass from '../../assets/Skills/sass-1.svg'
import html from '../../assets/Skills/html-1.svg'
import css from '../../assets/Skills/css-3.svg'
import python from '../../assets/Skills/python-5.svg'
import git from '../../assets/Skills/git-icon.svg'
import mysql from '../../assets/Skills/mysql-6.svg'
import postgre from '../../assets/Skills/postgresql.svg'
import postman from '../../assets/Skills/postman.svg'
import { Element } from 'react-scroll';


const SkillSection = () => {

  

  const [technology, setTechnology] = useState(true)
  const [scale, setScale] = useState(false)

  

  let techHandle = ()=>{
    setTechnology(true)
    setScale(false)
  }
  let scaleHandle = ()=>{
    setScale(true)
    setTechnology(false)
  }


  return (
    <Element name='skills' className='p-4 pt-24'>
      <h3 className='text-3xl text-center font-semibold'>Skills</h3>
      <h5 className='text-xl text-center font-normal my-4'>Here are some of my skills on which I have been working on for the past 1 years.</h5>
      
      <div className='flex justify-center'>
        <div class="inline-flex z-10 rounded-md shadow-sm" role="group">
          <button onClick={techHandle} type="button" class={`px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700`}>
            Technology
          </button>
          <button onClick={scaleHandle} type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-l-0 border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            Scaling
          </button>
        </div>
      </div>

      <div className='grid grid-cols-12 gap-4 mt-10'>
          <div className="col-span-6 z-10 p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1 className='text-center font-medium mb-4'>Frontend</h1>
            {technology?
              <>
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  <div className='flex justify-center items-center'>
                    <img src={react} width={15} className='h-6' alt='react'/>
                    <div className='ml-2'>React Js</div>
                  </div>
                </button>
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  <div className='flex justify-center items-center'>
                    <img src={javascript} width={15} className='h-6' alt='js'/>
                    <div className='ml-2'>Javascript</div>
                  </div>
                </button>
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  <div className='flex justify-center items-center'>
                    <img src={jquery} width={15} className='h-6' alt='jq'/>
                    <div className='ml-2'>JQuery</div>
                  </div>
                </button>
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  <div className='flex justify-center items-center'>
                    <img src={tailwind} width={15} className='h-6' alt='tw'/>
                    <div className='ml-2'>Tailwind</div>
                  </div>
                </button>
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  <div className='flex justify-center items-center'>
                    <img src={bootstrap} width={15} className='h-6' alt='bt'/>
                    <div className='ml-2'>Bootstrap</div>
                  </div>
                </button>
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  <div className='flex justify-center items-center'>
                    <img src={sass} width={15} className='h-6' alt='ss'/>
                    <div className='ml-2'>Sass</div>
                  </div>
                </button>
                <button type="button" class=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  <div className='flex justify-center items-center'>
                    <img src={html} width={15} className='h-6' alt='html'/>
                    <div className='ml-2'>HTML</div>
                  </div>
                </button>
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  <div className='flex justify-center items-center'>
                    <img src={css} width={15} className='h-6' alt='css'/>
                    <div className='ml-2'>CSS</div>
                  </div>
                </button>
              </>:
              <>
                <div className='my-4'>
                  <div class="flex justify-between mb-1">
                    <span class="text-base font-medium dark:text-white">React Js</span>
                    <span class="text-sm font-medium text-red-700 dark:text-white">75%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-red-400 h-2.5 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className='my-4'>
                  <div class="flex justify-between mb-1">
                    <span class="text-base font-medium  dark:text-white">Javascript</span>
                    <span class="text-sm font-medium text-red-700 dark:text-white">70%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-red-400 h-2.5 rounded-full w-2/3"></div>
                  </div>
                </div>
                <div className='my-4'>
                  <div class="flex justify-between mb-1">
                    <span class="text-base font-medium  dark:text-white">JQuery</span>
                    <span class="text-sm font-medium text-red-700 dark:text-white">45%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-red-400 h-2.5 rounded-full w-64"></div>
                  </div>
                </div>
                <div className='my-4'>
                  <div class="flex justify-between mb-1">
                    <span class="text-base font-medium  dark:text-white">Tailwind</span>
                    <span class="text-sm font-medium text-red-700 dark:text-white">60%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-red-400 h-2.5 rounded-full w-80"></div>
                  </div>
                </div>
                <div className='my-4'>
                  <div class="flex justify-between mb-1">
                    <span class="text-base font-medium  dark:text-white">Bootstrap</span>
                    <span class="text-sm font-medium text-red-700 dark:text-white">80%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-red-400 h-2.5 rounded-full w-5/6"></div>
                  </div>
                </div>
                <div className='my-4'>
                  <div class="flex justify-between mb-1">
                    <span class="text-base font-medium  dark:text-white">Sass</span>
                    <span class="text-sm font-medium text-red-700 dark:text-white">40%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-red-400 h-2.5 rounded-full w-2/6"></div>
                  </div>
                </div>
                <div className='my-4'>
                  <div class="flex justify-between mb-1">
                    <span class="text-base font-medium  dark:text-white">HTML</span>
                    <span class="text-sm font-medium text-red-700 dark:text-white">70%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-red-400 h-2.5 rounded-full w-4/6"></div>
                  </div>
                </div>
                <div className='my-4'>
                  <div class="flex justify-between mb-1">
                    <span class="text-base font-medium  dark:text-white">CSS</span>
                    <span class="text-sm font-medium text-red-700 dark:text-white">80%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-red-400 h-2.5 rounded-full w-5/6"></div>
                  </div>
                </div>
              </>
            }
          </div>
          <div className="col-span-6 z-10 p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1 className='text-center font-medium mb-3'>Backend</h1>
            {technology?
              <>
                <div className='flex justify-center'>
                  <button type="button" class=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <div className='flex justify-center items-center'>
                      <img src={python} width={15} alt='py'/>
                      <div className='ml-2'>Python</div>
                    </div>
                  </button>
                  <button type="button" class=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <div className='flex justify-center items-center'>
                      <img src={dj} width={15} alt='dj'/>
                      <div className='ml-2'>Django</div>
                    </div>
                  </button>
                </div>
                <div className='flex justify-center'>
                  <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Rest Framework
                  </button>
                  <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Restful APIs
                  </button>
                  <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    JWT
                  </button>
                </div>
                <div className='flex justify-center'>
                  <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <div className='flex justify-center items-center'>
                      <img src={git} width={15} alt='git'/>
                      <div className='ml-2'>Git</div>
                    </div>
                  </button>
                  <button type="button" class=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <div className='flex justify-center items-center'>
                      <img src={mysql} width={15} alt='msql'/>
                      <div className='ml-2'>MySQL</div>
                    </div>
                  </button>
                  <button type="button" class=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <div className='flex justify-center items-center'>
                      <img src={postgre} width={15} alt='pqsl'/>
                      <div className='ml-2'>PostgreSQL</div>
                    </div>
                  </button>
                  <button type="button" class=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <div className='flex justify-center items-center'>
                      <img src={postman} width={15} alt='pman'/>
                      <div className='ml-2'>Postman</div>
                    </div>
                  </button>
                </div>
              </>:
              <>
                <div className='my-4'>
                  <div class="flex justify-between mb-1">
                    <span class="text-base font-medium  dark:text-white">Python</span>
                    <span class="text-sm font-medium text-blue-700 dark:text-white">70%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-blue-400 h-2.5 rounded-full w-2/3"></div>
                  </div>
                </div>
                <div className='my-4'>
                  <div class="flex justify-between mb-1">
                    <span class="text-base font-medium  dark:text-white">Django</span>
                    <span class="text-sm font-medium text-blue-700 dark:text-white">75%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-blue-400 h-2.5 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className='my-4'>
                  <div class="flex justify-between mb-1">
                    <span class="text-base font-medium  dark:text-white">Rest Framework</span>
                    <span class="text-sm font-medium text-blue-700 dark:text-white">60%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-blue-400 h-2.5 rounded-full w-3/5"></div>
                  </div>
                </div>
                <div className='my-4'>
                  <div class="flex justify-between mb-1">
                    <span class="text-base font-medium  dark:text-white">Git</span>
                    <span class="text-sm font-medium text-blue-700 dark:text-white">50%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-blue-400 h-2.5 rounded-full w-2/4"></div>
                  </div>
                </div>
                <div className='my-4'>
                  <div class="flex justify-between mb-1">
                    <span class="text-base font-medium  dark:text-white">MySQL</span>
                    <span class="text-sm font-medium text-blue-700 dark:text-white">70%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-blue-400 h-2.5 rounded-full w-2/3"></div>
                  </div>
                </div>
                <div className='my-4'>
                  <div class="flex justify-between mb-1">
                    <span class="text-base font-medium  dark:text-white">PostgreSQL</span>
                    <span class="text-sm font-medium text-blue-700 dark:text-white">70%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-blue-400 h-2.5 rounded-full w-2/3"></div>
                  </div>
                </div>
              </>
            }

          </div>
      </div>
    </Element>
  )
}

export default SkillSection