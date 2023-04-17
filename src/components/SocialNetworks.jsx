import React from 'react'
import Styles from "../style/socialNetworks.module.css"
import { BsInstagram } from "react-icons/bs"
import { AiOutlineLinkedin, AiFillGithub, AiFillPhone } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { forwardRef } from 'react'

const SocialNetworks = (props, ref) => {
  return (
    <div className={Styles.all} ref={ref}>
      <h1>CONTATO</h1>
      <div>
        <div className={Styles.redes}>
          <a href='https://www.linkedin.com/in/gabriel-diniz-2245931bb'><AiOutlineLinkedin /></a>
          <a href='https://github.com/bieldnz'><AiFillGithub /></a>
          <a href='' id={Styles.insta}><BsInstagram /></a>
        </div>
      </div>
      <div className={Styles.alinharContato}>
        <div className={Styles.alinhar}>
          <MdEmail color='#E5ABF5' />
          <h2>GABRIEL.DINIZDESOUZA@HOTMAIL.COM</h2>
        </div>
        <div className={Styles.alinhar}>
          <AiFillPhone color='#E5ABF5' />
          <h2>1194516-0890</h2>
        </div>
        <a className={Styles.botao} href="/curriculo.pdf" download>DOWNLOAD CURRÍCULO</a>
      </div>
    </div>
  )
}

export default React.forwardRef(SocialNetworks)