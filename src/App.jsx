import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Top from "./components/Top"
import Skills from "./components/Skills"
import SocialNetworks from './components/SocialNetworks'
import Sobre from "./components/Sobre.jsx"
import Projects from "./components/Projects"
import Footer from './components/Footer'
import { useRef } from 'react'

function App() {
  const refProjects = useRef(null);
  const refSobre = useRef(null);
  const refHabilidades = useRef(null);
  const refContato = useRef(null);

  function irProjetos(){
    refProjects.current?.scrollIntoView({behavior: 'smooth'});
  }
  function irSobre(){
    refSobre.current?.scrollIntoView({behavior: 'smooth'});
  }
  function irHabilidades(){
    refHabilidades.current?.scrollIntoView({behavior: 'smooth'})
  }
  function irContato(){
    refContato.current?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className="App">
      
      <Top irProjetos={irProjetos} irSobre={irSobre} irHabilidades={irHabilidades} irContato={irContato}/>
      <Sobre ref={refSobre}/>
      <Skills ref={refHabilidades}/>
      <Projects ref={refProjects}/>
      <SocialNetworks ref={refContato}/>
      <Footer/>
    </div>
  )
}

export default App
