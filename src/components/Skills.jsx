import React from 'react'
import ReactDOM from 'react-dom'
import Styles from "../style/skills.module.css"
import Card from "./Card.jsx"
import {FaCss3Alt} from 'react-icons/fa'
import {DiJavascript} from "react-icons/di"
import {DiReact, DiGit} from "react-icons/di"
import {AiFillHtml5, AiFillGithub} from "react-icons/ai"
import {useState} from "react"
import { ForwardRef } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';


const Skills = (props, ref) => {

  let textHTML = "Tenho 3 anos de experiência com HTMl e vários projetos pessoais com ele no GitHub."
  let textCSS = "Tenho 3 anos de experiência com CSS3 e vários projetos pessoais com ele no GitHub."
  let textJs = "Tenho 3 anos de experiência com JavaScript e vários projetos pessoais publicados com ele no GitHub"
  let textReact = "Tenho 1 ano de experiência com React e alguns projetos pessoais com ele no GitHub."
  let textGitHub = "Tenho 1 ano de experiência com GitHub."
  let textGit = "Tenho 6 meses de experiência com Git."

  const [show, setShow] = useState(false);
  const [name, setName] = useState()
  const [text, setText] = useState()

  const handleClose = () => setShow(false);
  const handleShow = (name, text) => {
    setShow(true)
    setName(name)
    setText(text.toUpperCase())
  };

  const myStyle = {
    backgroundColor: "#E5ABF5",
    color: "#9A65A8"
  }

  return (
    <div>
        <div className={Styles.boxCardSkills}>
        <h1 className={Styles.skillsTittle} ref={ref}>HABILIDADES</h1>
            <Card icon={<AiFillHtml5/>} show={handleShow} name="HTML" text={textHTML} myStyle={myStyle} color="#E5ABF5"/>
            <Card icon={<FaCss3Alt/>} show={handleShow} name="CSS3" text={textCSS} myStyle={myStyle}/>
            <Card icon={<DiJavascript/>} show={handleShow} name="JAVASCRIPT" text={textJs} myStyle={myStyle}/>
            <Card icon={<DiReact/>} show={handleShow} name="REACT" text={textReact} myStyle={myStyle}/>
            <Card icon={<DiGit/>} show={handleShow} name="GIT" text={textGitHub} myStyle={myStyle}/>
            <Card icon={<AiFillGithub/>} show={handleShow} name="GITHUB" text={textGit} myStyle={myStyle}/>
        </div>

      <Modal show={show} onHide={handleClose} className={Styles.modal}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Body style={{backgroundColor: "#9A65A8"}} className={Styles.textModal}>
          <b>{name}</b>
          <p>{text}</p>
          <button className={Styles.btnModal} onClick={handleClose}>Fechar</button>
        </Modal.Body>
      </Modal>

    </div>

  )
}

export default React.forwardRef(Skills)