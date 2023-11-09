import React, { useRef, useState, useEffect } from 'react'
import { forwardRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const [alert, setAlert] = useState(false)
    const [spinner, setSpinner] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setSpinner(true)
        emailjs.sendForm('service_2057b61', 'template_g9eakir', form.current, 'R4UoeY_S5OIpxepwU')
          .then((result) => {
              setAlert(true)
              setSpinner(false)
              form.current.reset();
          }, (error) => {
              setSpinner(false)
              console.log(error.text);
          });
      };

    
      useEffect(()=>{
        setTimeout(()=>{
          setAlert(false)
        }, 5000)
      }, [alert])



  return (
    <div id='contact' className='m-4 my-24 z-10'>
        <h3 className='text-3xl text-center text-black font-semibold mb-8'>Contact</h3>
        
        <div>
            
            <div className='flex justify-center items-center'>
                <div class="p-4 border rounded-lg bg-white z-10 w-2/4">
                    <button type="button" data-drawer-hide="drawer-contact" aria-controls="drawer-contact" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close menu</span>
                    </button>
                    <form ref={form} onSubmit={sendEmail} class="mb-6">
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name='from_email' id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@email.com" required/>
                        </div>
                        <div class="mb-6">
                            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="text" name='from_name' id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required/>
                        </div>
                        <div class="mb-6">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                            <textarea name='message' id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                        </div>
                        <button type="submit" value="Send" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">
                            {spinner?
                            <div role="status">
                            <svg aria-hidden="true" class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span class="">Sending...</span>
                        </div>: "Send Message"    
                        }
                        </button>
                    </form>

                    {alert &&
                        <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <span class="font-medium">Success alert!</span> Message Send.
                        </div>
                    }


                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <a href="#" class="hover:underline">tanvirmahmud.cse66@gmail.com</a>
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                        <a href="#" class="hover:underline">+880-170-1744-799</a>
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact