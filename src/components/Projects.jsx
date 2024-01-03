import React from 'react'
import StyleProjects from "../style/projects.module.css"
import Card from './Card'
import { forwardRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = (props, ref) => {

  const myStyle = {
    backgroundColor: "#9A65A8",
    color: "#E5ABF5"
  }

  return (
    <div className={StyleProjects.all}>
        <h1 className={StyleProjects.projectTittle} ref={ref}>PROJETOS</h1>
        <div className={StyleProjects.boxCardProjects}>
        <Card link="https://product-register.netlify.app" icon={<b className={StyleProjects.breve}>GAMORA GYM</b>} myStyle={myStyle}/>
        <Card link="https://gitstarwars.netlify.app/" icon={<b className={StyleProjects.breve}>APIs</b>} myStyle={myStyle}/>
        <Card link="https://marketplace-sg1u.vercel.app/" icon={<b className={StyleProjects.breve}>PROJETOS</b>} myStyle={myStyle}/>
        </div>
    </div>
  )
}

export default React.forwardRef(Projects);