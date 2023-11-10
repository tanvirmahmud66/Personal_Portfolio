import React from 'react'

import { Element } from 'react-scroll';


const Education = () => {
  

  return (
    <Element name='education' className='pt-20 sm:pt-24 flex justify-center items-center'>
    <div className='w-full py-10 m-4 bg-slate-800 z-10 rounded-lg'>
        <h3 className='text-3xl text-center text-slate-50 font-semibold mb-5'>Education</h3>
        <div className='grid grid-col-12 xl:grid-cols-3'>
          <ol class="ml-5 sm:mr-5  relative col-start-2 xl:col-start-2 xl:col-end-4 text-slate-400 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
              <li class="mb-10 ml-6">            
                  <span class="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-lime-500 dark:ring-gray-900 dark:bg-green-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </span>
                  <h3 class="font-medium leading-tight">B.Sc. in Computer Science & Engineering</h3>
                  <p class="text-sm">Stamford University Bangladesh</p>
              </li>
              <li class="mb-10 ml-6">
                  <span class="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-lime-500 dark:ring-gray-900 dark:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </span>
                  <h3 class="font-medium leading-tight">New Govt. Degree College, Rajshahi</h3>
                  <p class="text-sm">Higher School Certificate (H.S.C)</p>
                  <p className='text-sm'>Rajshahi Board - 2016</p>
                  {/* <p className='text-sm'>GPA - 5.00</p> */}
              </li>
              <li class="ml-6">
                  <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-lime-500 dark:ring-gray-900 dark:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </span>
                  <h3 class="font-medium leading-tight">Islami Academy High School, Rajshahi</h3>
                  <p class="text-sm">Secondary School Certificate (S.S.C)</p>
                  <p className='text-sm'>Rajshahi Board - 2014</p>
                  {/* <p className='text-sm'>GPA - 5.00</p> */}
              </li>
          </ol>
        </div>

    </div>
    </Element>
  )
}

export default Education