import React from 'react'
import Navbar from '../components/navbar/Navbar'

const Layout = ({children}) => {
  return (
    <>  
        <Navbar/>
        <div className='container mx-auto xl:px-20'>
            {children}
        </div>
    </>
  )
}

export default Layout