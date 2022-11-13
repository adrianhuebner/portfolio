import React from "react";
import "./skills.css";
import { IconContext } from "react-icons";
import {SiJavascript} from "react-icons/si";
import {TiHtml5} from "react-icons/ti";
import {TbBrandCss3} from "react-icons/tb";
import {FaSass} from "react-icons/fa";
import {SiPostgresql} from "react-icons/si";
import {DiMongodb} from "react-icons/di";

const Skills = () => {
    return (
        <div className="skills">
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <TiHtml5 size={70} />
                <TbBrandCss3 size={70} />
                <SiJavascript size={70} />
                <FaSass size={70} />
                <SiPostgresql size={70} />
                <DiMongodb size={70} />
            </IconContext.Provider>
        </div> 
    )
}

export default Skills;