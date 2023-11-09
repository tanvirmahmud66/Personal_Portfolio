import Education from "./components/education/Education";
import HeroSection from "./components/hero/HeroSection";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import SkillSection from "./components/skills/SkillSection";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Contact from "./components/contact/Contact";
import FooterSection from "./components/footer/FooterSection";
import { BrowserRouter as Router } from "react-router-dom";




function App() {


  const options = {
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: .3
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.5,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      },
      zindex: {
        value: 1 // You can set the desired z-index value here.
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };
  
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  


  return (
    <>
        <Particles options={options} init={particlesInit} />


        <div className="container mx-auto">
          <Router>
            <Navbar />

            <HeroSection/>
            <SkillSection/>
            <Education/>
            <Projects/>
            <Contact/>

            <FooterSection/>
          </Router>
        </div>


    </>
  );
}

export default App;




