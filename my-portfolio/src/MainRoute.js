import React from 'react'
import HeroSection from './components/hero/HeroSection'
import SkillSection from './components/skills/SkillSection'
import Education from './components/education/Education'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

const MainRoute = () => {
  return (
    <>  
        <div id='home'>
          <HeroSection/>
        </div>
        <div id='skills'>
          <SkillSection/>
        </div>
        <div id='education'>
          <Education/>
        </div>
        <div id='projects'>
          <Projects/>
        </div>
        <div id='contact'>
          <Contact/>
        </div>
    </>
  )
}

export default MainRoute