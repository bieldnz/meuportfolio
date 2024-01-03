import React from 'react'
import styles from "../style/top.module.css"
import Perfil from "../assets/perfil.png"
import 'bootstrap/dist/css/bootstrap.min.css';

const top = ({irProjetos, irSobre, irHabilidades, irContato}) => {
  return (
    <>
        <div className={styles.all}>
            <div className={styles.esq}>
                <div className={styles.card}>
                  <div className={styles.cardInside}>
                    <img src={Perfil}/>
                    <div className={styles.nameDev}>
                      <a>GABRIEL DINIZ</a>
                    </div>
                    <div className={styles.devFunction}>
                      <p>DESENVOLVEDOR</p>
                      <p>FRONT-END</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className={styles.dir}>
              <div className={styles.alinharBotoes}>
                <button className={styles.botoes} onClick={irSobre}>SAIBA MAIS100</button>
                <button className={styles.botoes} onClick={irHabilidades}>HABILIDADES</button>
                <div className={styles.break}></div>
                <button className={styles.botoes} onClick={irProjetos}>PROJETOS</button>
                <button className={styles.botoes} onClick={irContato}>CONTATO</button>
              </div>
            </div>
        </div>
        
    </>
  )
}

export default top