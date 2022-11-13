import React from "react";
import "./skills.css";
import {SiJavascript} from "react-icons/si";
import {TiHtml5} from "react-icons/ti";
import {TbBrandCss3} from "react-icons/tb";
import {FaSass} from "react-icons/fa";
import {SiPostgresql} from "react-icons/si";
import {DiMongodb} from "react-icons/di";

const Skills = () => {
    return (
        <div className="skills">
            <TiHtml5 />
            <TbBrandCss3 />
            <SiJavascript />
            <FaSass />
            <SiPostgresql />
            <DiMongodb />
        </div>
    )
}

export default Skills;