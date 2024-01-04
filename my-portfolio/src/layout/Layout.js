import React from 'react'
import Navbar from '../components/navbar/Navbar'
import FooterSection from '../components/footer/FooterSection'

const Layout = ({children}) => {
  return (
    <>  
        <Navbar/>
        <div className='container mx-auto xl:px-20'>
            {children}
        </div>
        <FooterSection/>
    </>
  )
}

export default Layout