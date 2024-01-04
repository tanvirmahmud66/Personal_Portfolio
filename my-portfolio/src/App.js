
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { scroller } from 'react-scroll';
import Layout from "./layout/Layout";
import SingleProject from "./components/projects/SingleProject";
import MainRoute from "./MainRoute";



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
          enable: false,
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

  
  useEffect(() => {
    scroller.register(['home', 'skills', 'education', 'projects', 'contact']);

    return () => {
      scroller.unregister(['home', 'skills', 'education', 'projects', 'contact']);
    };
  }, []);


  return (
    <>
        <Particles options={options} init={particlesInit} />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<MainRoute/>}/>
              <Route path="/project/:id/:name" element={<SingleProject/>}/>
            </Routes>
          </Layout>
        </Router>
    </>
  );
}

export default App;




