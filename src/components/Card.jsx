import React from 'react'
import Styles from "../style/skills.module.css"

const Card = ({icon, show, name, text, myStyle, link}) => {
    
    function clicar(){
        show(name, text)
    }

    return ( 
    <div className={Styles.containerCardSkills}>
        <a className={Styles.cardSkills} onClick={clicar} style={myStyle} target="_blank">
            <div className={Styles.cardSkillsInside}>
                {icon}
            </div>
        </a>
    </div>
    )
}

export default Card