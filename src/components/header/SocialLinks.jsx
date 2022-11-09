import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {FaGithubAlt} from "react-icons/fa";

const SocialLinks = () => {
    return (
        <div className='Socials'>
            <a href= "https://linkedin.com" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com" target="_blank"> <FaGithubAlt /></a>
        </div>
    )
}

export default SocialLinks