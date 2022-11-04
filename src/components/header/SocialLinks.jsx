import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {FaGithubAlt} from "react-icons/fa";
require('dotenv').config()

const SocialLinks = () => {
    return (
        <div className='socials'>
            <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com" target="_blank"></a>
        </div>
    )
}

export default SocialLinks