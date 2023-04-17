import React from 'react'
import Styles from "../style/sobre.module.css"
import Perfil from "../perfil.jpeg"
import { ForwardedRef } from 'react'

const Sobre = (props, ref) => {

  const myStyle = {
    backgroundColor: "#E5ABF5",
  }

  return (
    <div className={Styles.all}>
      <div className={Styles.boxCardSkills} style={{ backgroundColor: "#E5ABF5" }}>
        <h1 ref={ref} id={Styles.sobre}>SOBRE</h1>
        <div className={Styles.boxSobre}>
          <p>Formado em desenvolvimento de sistemas pela ETEC de Itaquera, estudo programação há três anos estou em busca do meu primeiro emprego como desenvolvedor Front-End. Tenho experiência em React.js, HTML, JavaScript e CSS3</p>
        </div>
      </div>
    </div>
  )
}

export default React.forwardRef(Sobre)